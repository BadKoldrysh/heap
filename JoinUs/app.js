'strict types';

let express = require("express");
let mysql = require("mysql");
let bodyParser = require("body-parser");

let app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'join_us',
});

app.post("/register", function(req, res) {
    let person = {
        email: req.body.email,
    };

    connection.query('INSERT INTO users SET ?', person, function(err, result) {
        if (err) throw err;
        res.redirect("/");
    })

    // console.log("POST REQUEST SENT TO /register" + req.body.email);
});

app.get("/", function(req, res) {
    let q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, function(error, result) {
        if (error) throw error;
        let count = result[0].count;
        // res.send("We have " + count + " users in our db");
        res.render("home", {count: count});
    });
});

app.get("/contacts", function(req, res) {
    let message = "IT'S A CONTACTS PAGE";
    res.send(message);
    console.log("CONTACT PAGE HAS REQUESTED")
});

app.get("/rand_num", function(req, res) {
    let n = Math.floor(Math.random() * 10) + 1;
    res.send("Your lucky number is " + n);
});

app.listen(8080, function() {
    console.log('App listening on port 8080!');
});