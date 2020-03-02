let express = require("express");
let app = express();

app.get("/", function(request, result) {
    result.send("HELLO FROM EXPRESS WEB APP");
});

app.listen(8080, function() {
    console.log('App listening on port 8080!');
});