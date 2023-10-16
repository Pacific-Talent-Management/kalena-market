const express = require("express");
const cors = require("cors");
const db = require("./queries.js");

const app = express();

// allow requests from the React app running at port 8081
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
app.get("/", (req, res) => {
   res.json({ message: "Welcome to the Kalena backend."});
});
app.get("/users", db.getUsers);
   
app.post("/users/signup", checkEmailExists, db.createUser);

app.post("/users/signin", db.signin);

app.listen(8080, () => {
   console.log('Server running on port 8080');
});
