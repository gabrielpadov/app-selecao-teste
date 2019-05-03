
/**
 * Module Dependencies
 */
const errors = require('restify-errors');

/**
 * Model Schema
 */
const Todo = require('../models/todo');

module.exports = function(server) {

	/**
	 * POST
	 */
	server.post('/todos', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		let todo = new Todo(data);
		todo.save(function(err) {
			if (err) {
				res.send(500,{
					type: false,
					data: err
				});
			
				console.error(err);
				return next(new errors.InternalError(err.message));
			}

			res.send(201,{
					type: true,
					message: "Success"
				});

			next();
			
		});
	});

	/**
	 * LIST
	 */
	server.get('/todos', (req, res, next) => {
		Todo.apiQuery(req.params, function(err, docs) {
			if (err) {
				res.send(500,{
					type: false,
					data: err
				});
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				);
			}

			res.send(docs);
			next();
		});
	});

	/**
	 * GET
	 */
	server.get('/todos/:todo_id', (req, res, next) => {
		Todo.findOne({ _id: req.params.todo_id }, function(err, doc) {
			if (err) {
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				);
			}

			res.send(doc, {message: "Success"});
			next();
		});
	});

	/**
	 * UPDATE
	 */
	server.put('/todos/:todo_id', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		if (!data._id) {
			data = Object.assign({}, data, { _id: req.params.todo_id });
		}

		Todo.findOne({ _id: req.params.todo_id }, function(err, doc) {
			if (err) {
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				);
			} else if (!doc) {
				return next(
					new errors.ResourceNotFoundError(
						'The resource you requested could not be found.',
					),
				);
			}

			Todo.update({ _id: data._id }, data, function(err) {
				if (err) {
					console.error(err);
					res.send(500, {
						type: false,
						data: "Todo: " + req.params.id + " não encontrado"
					});
					return next(
						new errors.InvalidContentError(err.errors.name.message),
					);
				}

				res.send(200, data, {message: "Success"});
				next();
			});
		});
	});

	/**
	 * DELETE
	 */
	server.del('/todos/:todo_id', (req, res, next) => {
		Todo.remove({ _id: req.params.todo_id }, function(err) {
			if (err) {
				res.send(500,{
					type: false,
					data: err
				});
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				);
			}

			res.send(200, {
                type: true,
                data: "Todo: " + req.params.id + " removido com sucesso"
            });
			next();
		});
	});
};   