//controlls the behavior of the todo list
//allows this to be imported into other main file

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://test:test@ds149258.mlab.com:49258/todo-jeiben');

//create schema for data - like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

//create a todo model, based on a Schema
var Todo = mongoose.model('Todo', todoSchema);

//var data = [{item: 'get milk'},{item: 'walk dog'},{item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/todo', function(req, res){
    //get data from mongodb and pass it to the view
    Todo.find({}, function(err, data){
      if (err) throw err;
      res.render('todo', {todos: data});
    });
  });

  app.post('/todo', urlencodedParser, function(req, res){
    //get data from the fiew and add it to mongodb
    var newTodo = Todo(req.body).save(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item', function(req, res){
    //delete the requested item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
      if (err) throw err;
      res.json(data);
    });
  });

};
