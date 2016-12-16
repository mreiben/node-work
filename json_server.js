var http = require('http');
var fs = require('fs');

//res is a writable stream
var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Sarah',
    job: 'Ninja',
    age: 29
  };
  //convert this into a stream before sending

  res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('hey friend, now listening to port 3000');
