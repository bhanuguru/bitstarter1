var express = require('express');
var app = express();
var buf;
var len = 0;
var fs = require('fs');

app.use(express.logger());

app.get('/', function(request, response) {
  fs.readFile('./index.html', function(err, data) {
     if(err) {
         throw err;
      }
    buf = data;
    console.log(data); 
  }   
  response.send("Hello World from index.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

