var express = require('express');
var app = express();
var buffer = new Buffer(30);

app.use(express.logger());

app.get('/', function(request, response) {
  fs.readFile('./index.html', function(err, data) {
     if(err) {
         throw err;
      } 
      buffer.write(data);
  }   
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

