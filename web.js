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
      console.log(data); 
      buf = new Buffer(30);
      len = buf.write(data, 0);
  }   
  response.send(buf.toString('utf-8',0,len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

