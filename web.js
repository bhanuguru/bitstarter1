var express = require('express');
var app = express();
var buffer = new Buffer(30);
var fs = require('fs');

app.use(express.logger());

app.get('/', function(request, response) {
  fs.readFile('./index.html', function(err, data) {
     if(err) {
         throw err;
      }
      console.log(data); 
      buffer.write(data);
  }   
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

