var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var fdata = fs.readFileSync("index.html"); // buffer

app.get('/', function(request, response) {
  response.send(fdata.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});