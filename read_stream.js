var http = require('http');

var fs = require('fs');

//readstream takes the data a chunk at a time
//utf8 specifies a format for the chunk
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
//compare to fs.readfile, which only calls the
//callback function when the WHOLE thing has loaded


//we can recognize when the first chunk arrives
//createReadStream has an event emitter we can use

myReadStream.on('data', function(chunk){
  console.log('new chunk received:');
  console.log(chunk);
});
