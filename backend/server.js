const express = require("express");
const cors = require("cors");
const db = require("./queries.js");
const request = require('request');

const app = express();

// allow requests from the React app running at port 8081
// 8080 is what Express is running on
let corsOptions = {
   origin: "http://localhost:8081"
};

const { checkEmailExists } = require("./middleware/checkEmailExists.js");

app.use(cors(corsOptions));

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});


// Routes
app.get("/flask", (req, res) => {
   request('http://127.0.0.1:5000/flask',
   function (error, response, body) {
      res.status(200).send(body)
   
   });
});
app.get("/", (req, res) => {
   res.json({ message: "Welcome to the Kalena backend."});
});
app.get("/users", db.getUsers);

app.get("/jobs", db.getJobs);
   
app.post("/users/signup", checkEmailExists, db.createUser);

app.post("/users/signin", db.signin);

app.get("/users/:id", db.loadUser);

app.patch("/users/:id", db.editUser);

app.patch("/users/pass/:id", db.editPass);

app.patch("/users/:id", db.updateImage);

app.get("/likes/:user_id", db.getLikes);

app.post("/likes/likeJob", db.likeJob);

app.delete("/likes/:id", db.unlikeJob);

app.post("/resumes/upload", db.uploadResume);

app.listen(8080, () => {
   console.log('Server running on port 8080');
});
