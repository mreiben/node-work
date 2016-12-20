var express = require('express'); //this returns a function
//set up an express app
var app = express();

//tell express to use ejs as the view engine
app.set('view engine', 'ejs');

//setting up the routes
app.get('/', function(req,res){
  res.render('index');
});

app.get('/contact', function(req,res){
  res.render('contact');
});

app.get('/profile/:name', function(req,res){
  var data = {age: 29, job: 'ninja', hobbies: ["eating", "fighting", "fishing"]};
  res.render('profile', {person: req.params.name, data: data});
});

//tell server what port to listen to
app.listen(3000);
