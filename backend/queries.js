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

module.exports = { createUser, signin, getUsers, getJobs };
