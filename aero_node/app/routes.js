//var Todo = require('./models/AeroStation');
var aero = require('./models/AeroStation');

function getAeroStations(res) {
    aero.find(function (err, data){
		if (err) {
            res.send(err);
        }
		res.json(data);
	});
};

module.exports = function(app) {
	app.get('/api/aerostations', function(req, res) {
		getAeroStations(res);
	});
	
	app.post('/api/aerostations', function(req, res) {
        AeroStation.create({
            text: req.body.text
        }, function  (error, aeroStation) {
            if (err) {
				res.send(err);
            }
            // get all aero stations
            getAeroStations(res);
        });
	});
    
    app.delete('/api/aerostations/:aeroStation_id', function(req, res) {
        AeroStation.remove({
            _id : req.params.aeroStation_id
        }, function (err, aeroStation) {
            if (err) {
				res.send(err);
            }
            // get all aero stations
            getAeroStations(res);
        });
    });
    
    app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};


//module.exports = function(app) {
//
//	// api ---------------------------------------------------------------------
//	// get all todos
//	app.get('/api/todos', function(req, res) {
//
//		// use mongoose to get all todos in the database
//		getTodos(res);
//	});
//
//	// create todo and send back all todos after creation
//	app.post('/api/todos', function(req, res) {
//
//		// create a todo, information comes from AJAX request from Angular
//		Todo.create({
//			text : req.body.text,
//			done : false
//		}, function(err, todo) {
//			if (err)
//				res.send(err);
//
//			// get and return all the todos after you create another
//			getTodos(res);
//		});
//
//	});
//
//	// delete a todo
//	app.delete('/api/todos/:todo_id', function(req, res) {
//		Todo.remove({
//			_id : req.params.todo_id
//		}, function(err, todo) {
//			if (err)
//				res.send(err);
//
//			getTodos(res);
//		});
//	});
//
//	// application -------------------------------------------------------------
//	app.get('*', function(req, res) {
//		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
//	});
//};