var express = require("express")
var config = require("./config");

var app = express();
var port = process.env.PORT || 5000;

app.set('json spaces', 40);
app.get("/", function(request, response){
    response.json(config);
})

app.listen(port);
