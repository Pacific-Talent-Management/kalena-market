const mysql = require("mysql2");

const connection = mysql.createConnection({
   host: '127.0.0.1',
   user: 'janedoe',
   password: 'does_pass',
   database: 'kalena_test'
});

function checkEmailExists(req, res, next) {
   let sql = 'select * from users where email=?'
   connection.execute(sql,[req.body.email], function(err, results, fields) {
      if (results.length === 1) {
         res.status(400).send({
            message: 'Failure, email already in use'
         });
         return;
      }
   });
   next();
}

module.exports = { checkEmailExists };
