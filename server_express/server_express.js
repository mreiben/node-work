var express = require('express'); //this returns a function
//set up an express app
var app = express();

//tell express to use ejs as the view engine
app.set('view engine', 'ejs');

//setting up the routes
app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req,res){
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req,res){
  var data = {age: 29, job: 'ninja'};
  res.render('profile', {person: req.params.name, data: data});
});

//tell server what port to listen to
app.listen(3000);
