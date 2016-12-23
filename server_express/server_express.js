var express = require('express'); //this returns a function
//set up an express app
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//tell express to use ejs as the view engine
app.set('view engine', 'ejs');

//this allows static files, such as the css in the assets folder
//to be served up by the srever when one of the pages might request it
app.use('/assets', express.static('assets'));


//setting up the routes
app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
  var data = {age: 29, job: 'ninja', hobbies: ["eating", "fighting", "fishing"]};
  res.render('profile', {person: req.params.name, data: data});
});


//tell server what port to listen to
app.listen(3000);
