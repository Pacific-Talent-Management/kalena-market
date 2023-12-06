const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./config/auth.config.js");
const {checkEmailExists} = require("./middleware/checkEmailExists.js");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
   host: '127.0.0.1',
   user: 'janedoe',
   password: 'does_pass',
   database: 'kalena_test',
   multipleStatements: true
});

function createUser(request, response) {
   const {first_name, last_name, phone_number, email, password} = request.body;
   let sql = 'insert into users (first_name, last_name, phone_number,';
   sql += ' email, password) values (?,?,?,?,?)';
   const hash = bcrypt.hashSync(password, 10);
   let values = [
      first_name,
      last_name,
      phone_number,
      email,
      hash
   ];
   connection.execute(sql, values, function(err, results, fields) {
      if (err) {
         //console.error(err);
         return;
      }
      sql = 'select * from users where email=?';
      let id = 0;
      connection.execute(sql,[email], function(err, results, fields) {
         if (err) {
            return;
         }
         id = results[0].id;
         sql = 'insert into user_roles (user_id, role_id) values (?,?)';
         connection.execute(sql, [id,1], function(err, results, fields) {
            if (err) {
               console.error(err);
               return;
            }
         });
      });  
      response.status(201).send('User created\n');
   });
}

function signin(request, response) {
   const supplied_pass = request.body.password;
   const email = request.body.email;
   let sql = 'select * from users where email=?';
   connection.execute(sql, [email], function(err, results, fields) {
      if (results.length != 1) {
         response.status(400).send({
            message: "Invalid email"
         });
      }
      else if (results.length == 1) {
         const stored_pass = results[0].password;
         let isValid = bcrypt.compareSync(supplied_pass, stored_pass);
         if (!isValid) {
            response.status(401).send({
               message: "invalid password"
            });
            return;
         }
         const token = jwt.sign(
            { id: results[0].id },
            config.secret,
            {
               algorithm: 'HS256',
               allowInsecureKeySizes: true,
               expiresIn: 86400, // 24 hours
            }
         );
         sql = 'select * from user_roles_view where uid=?';
         let values = [results[0].id];
         connection.execute(sql,values, function(err, results2, fields) {
            let added_roles = [];
            for (let i = 0; i < results2.length; i++) {
               added_roles.push(results2[i].role);
            }
            response.status(200).send({
               id: results[0].id,
               first_name: results[0].first_name,
               last_name: results[0].last_name,
               phone_number: results[0].phone_number,
               email: results[0].email,
               location: results[0].location,
               user_rank: results[0].user_rank,
               roles: added_roles,
               accessToken: token
            });
         });
      }
   });
}

function getJobs(request, response) {
   let sql = 'select * from jobs';
   connection.query(sql, function(err, results, fields) {
      response.status(200).json(results);
   });
}

function getUsers(request, response) {
   let sql = 'select * from users';
   connection.query(sql, function(err, results, fields) {
      response.status(200).json(results);
   });
}

function loadUser(request, response) {
   const id = request.params.id
   let sql = 'select * from users where id = ?';
   connection.query(sql, id, function(err, results, fields) {
      response.status(200).json(results);
   });
}

function editUser(request, response) {
   const {first_name, last_name, phone_number, email, user_rank, location, link} = request.body;
   const id = request.params.id;
   let sql = "update users SET  first_name=?, last_name=?, phone_number=?, email=?, user_rank=?, location=?, link=? WHERE id=?";

   const values = [
      first_name,
      last_name,
      phone_number,
      email,
      user_rank,
      location,
      link,
      id
   ];

   connection.query(sql, values, (err, data) => {
      if (err) return response.send(err);
      return response.json(data);
   });
}

function editPass(request, response) {
   const {password} = request.body;
   const id = request.params.id;
   const hash = bcrypt.hashSync(password, 10);
   let sql = "update users SET  password=? WHERE id=?";

   const values = [
      hash,
      id
   ];

   connection.query(sql, values, (err, data) => {
      if (err) return response.send(err);
      return response.json(data);
   });
}

function updateImage(request, response) {
   const {image} = request.body;
   const id = request.params.id;
   let sql = "update users SET image=? WHERE id=?";

   const values = [
      image,
      id
   ];

   connection.query(sql, values, (err, data) => {
      if (err) return response.send(err);
      return response.json(data);
   });
}

function getLikes(request, response) {
   let sql = 'select id, job_id from likes where user_id=? order by job_id';
   const user_id = request.params.user_id;
   connection.query(sql, user_id, function(err, results, fields) {
      response.status(200).json(results);
   });
}

function likeJob(request, response) {
   const {user_id, job_id} = request.body;
   let sql = 'insert into likes (user_id, job_id) values (?, ?)';
   let values = [
      user_id,
      job_id,
     
   ];
   connection.query(sql, values, (err, data) => {
      if (err) return response.send(err);
      return response.json(data);
   });
}
function unlikeJob(request, response) {
   const id = request.params.id;
   let sql = 'delete from likes where id=?';
   connection.query(sql, id, (err, data) => {
      if (err) return response.send(err);
      return response.json(data);
   });
}
function getResume(req, res) {
   const id = req.params.id;
   let sql = 'select * from resumes where user_id=?';
   connection.query(sql,id, (err,data) => {
      if (err) return res.send(err);
      return res.json(data);
   })
}
function getApplicants(req,res) {
   const id = req.params.id;
   let sql = 'select * from jobs_likes_view where job_id=?';
   connection.query(sql,id, (err,data) => {
      if (err) return res.send(err);
      return res.json(data);
   })
}

function uploadResume(req, res){
   try{
      const{
         user_id,
         summary,
         civilian,
         education,
         assignments,
         skills_certs,
         languages,
         lang_desc,
         cultural,
         ref1_name,
         ref1_org,
         ref1_email,
         ref1_phone,
         ref2_name,
         ref2_org,
         ref2_email,
         ref2_phone,
         ref3_name,
         ref3_org,
         ref3_email,
         ref3_phone,
         ref4_name,
         ref4_org,
         ref4_email,
         ref4_phone,
      } = req.body;
      let sql = 'insert into resumes (user_id, summary, civilian, education, assignments, skills_certs'+
         ' , languages, lang_desc, cultural, ref1_name, ref1_org, ref1_email, ref1_phone'+
         ' , ref2_name, ref2_org, ref2_email, ref2_phone, ref3_name, ref3_org, ref3_email'+
         ' , ref3_phone, ref4_name, ref4_org, ref4_email, ref4_phone)'+
         ' values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
      
      const values = [
         user_id,
         summary,
         civilian,
         education,
         assignments,
         skills_certs,
         languages,
         lang_desc,
         cultural,
         ref1_name,
         ref1_org,
         ref1_email,
         ref1_phone,
         ref2_name,
         ref2_org,
         ref2_email,
         ref2_phone,
         ref3_name,
         ref3_org,
         ref3_email,
         ref3_phone,
         ref4_name,
         ref4_org,
         ref4_email,
         ref4_phone,
      ];
      
      connection.execute(sql, values, (err,results,fields) => {
         if (err) {
            console.error(err);
            return res.status(500).json({message: "Internal Server Error"});
         }
         res.status(201).json({message: "Resume data uploaded successfully"})
      });
   }
   catch (error) {
      console.error(error);
      res.status(500).json({message:"Internal Server Error"});
   }
}

module.exports = { createUser, signin, getUsers, getJobs, editUser,
   loadUser, editPass, updateImage, getLikes, likeJob, unlikeJob,
   uploadResume, getResume, getApplicants};

