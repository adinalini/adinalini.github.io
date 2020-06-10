var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello!");
});

app.get('/user/:username', function(req, res) {
    res.send("Hello " + req.params.username);
});



app.listen(3000);