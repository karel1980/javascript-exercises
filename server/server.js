
// TODO: simple expressjs app with a static TODO list shared across all users
// ok POST /todo/items to create a new TODO item, Location header in response
// ok GET /todo/items to get all TODO items
// ok DELETE /todo/items/{id} to delete a single item
// PUT /todo/items/{id} to update a single item (body { done: boolean })
// GET /todo/items/{id}


var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var app = express();

var nextId = 1;

app.use(bodyParser.json());

var todolist = [];

app.get('/todo/items', function (req, res) {
	  res.json(todolist);
});

app.post('/todo/items', function (req, res) {
	  id = nextId++;
	  item = req.body;
	  item.id = id;
	  todolist.push(item);
	  res.json(todolist);
});

app.param('id', function (req, res, next, id) {
	req.params.id = id;
	next();
});

app.delete('/todo/items/:id', function (req, res) {
	todolist = _.filter(todolist, function(item) {
		return item.id !== Number(req.params.id);
	});

	res.json(todolist);
});

app.listen(3000, function () {
	  console.log('Example app listening on port 3000!')
})
