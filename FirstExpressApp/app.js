var express = require("express");

var app = express();

// "/" -> "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});

// "bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});

// "/dog" => "Meow!"

app.listen(process.env.PORT, process.env.IP, function() { // type ->  "PORT=3000 node app.js" in terminal to start 
    console.log("Server has started!!");
});