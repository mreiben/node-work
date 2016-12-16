var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

//no need for data type for this one
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

myReadStream.on('data', function(chunk){
  console.log('new chunk received:');
  myWriteStream.write(chunk);
});

//every time a chunk is received, it is written to the new file
