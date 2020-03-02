let express = require("express");
let app = express();

app.get("/", function(request, result) {
    result.send("HELLO FROM EXPRESS WEB APP");
    console.log("HOME PAGE HAS REQUESTED");
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