var http = require('http');
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

//pipe removes need to manually write stream to other location
myReadStream.pipe(myWriteStream)

//same as below:

// myReadStream.on('data', function(chunk){
//   console.log('new chunk received:');
//   myWriteStream.write(chunk);
// });
