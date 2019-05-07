
/**
 * Module Dependencies
 */
const errors = require('restify-errors');

/**
 * Model Schema
 */
const Todo = require('../models/todo');
const Restaurant = require('../models/restaurant');
const Menu = require('../models/menu');
const Review = require('../models/review');
const Order = require('../models/order');

module.exports = function(server) {

	/**
	 * POST restaurant
	 */
	server.post('/restaurants', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		let restaurant = new Restaurant(data);
		restaurant.save(function(err) {
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
	 * LIST restaurant
	 */
	server.get('/restaurants', (req, res, next) => {
		Restaurant.apiQuery(req.params, function(err, docs) {
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
	 * GET restaurant
	 */
	server.get('/restaurants/:restaurant_id', (req, res, next) => {
		Restaurant.findOne({ _id: req.params.restaurant_id }, function(err, doc) {
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
	 * UPDATE restaurant
	 * 
	 */
	server.put('/restaurants/:restaurant_id', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		if (!data._id) {
			data = Object.assign({}, data, { _id: req.params.restaurant_id });
		}

		Restaurant.findOne({ _id: req.params.restaurant_id }, function(err, doc) {
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

			Restaurant.update({ _id: data._id }, data, function(err) {
				if (err) {
					console.error(err);
					res.send(500, {
						type: false,
						data: "Restaurant: " + req.params.id + " não encontrado"
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
	 * DELETE restaurant
	 */
	server.del('/restaurants/:restaurant_id', (req, res, next) => {
		Restaurant.remove({ _id: req.params.restaurant_id }, function(err) {
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
                data: "Restaurant: " + req.params.id + " removido com sucesso"
            });
			next();
		});
	});

	/**
	 * POST menu
	 */
	server.post('/menus', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		let menu = new Menu(data);
		menu.save(function(err) {
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
	 * LIST menu
	 */
	server.get('/menus', (req, res, next) => {
		Menu.apiQuery(req.params, function(err, docs) {
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
	 * GET menu
	 */
	server.get('/menus/:menu_id', (req, res, next) => {
		Menu.findOne({ _id: req.params.menu_id }, function(err, doc) {
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
	 * GET menu -> restaurantId
	 */
	server.get('/menusRestaurantId/:restaurantId', (req, res, next) => {
		Menu.find({ restaurantId: req.params.restaurantId }, function(err, doc) {
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
	 * UPDATE menu
	 * 
	 */
	server.put('/menus/:menu_id', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		if (!data._id) {
			data = Object.assign({}, data, { _id: req.params.menu_id });
		}

		Menu.findOne({ _id: req.params.menu_id }, function(err, doc) {
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

			Menu.update({ _id: data._id }, data, function(err) {
				if (err) {
					console.error(err);
					res.send(500, {
						type: false,
						data: "Menu: " + req.params.id + " não encontrado"
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
	 * DELETE menu
	 */
	server.del('/menus/:menu_id', (req, res, next) => {
		Menu.remove({ _id: req.params.menu_id }, function(err) {
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
                data: "Menu: " + req.params.id + " removido com sucesso"
            });
			next();
		});
	});


	/**
	 * POST review
	 */
	server.post('/reviews', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		let review = new Review(data);
		review.save(function(err) {
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
	 * LIST review
	 */
	server.get('/reviews', (req, res, next) => {
		Review.apiQuery(req.params, function(err, docs) {
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
	 * GET review
	 */
	server.get('/reviews/:review_id', (req, res, next) => {
		Review.findOne({ _id: req.params.review_id }, function(err, doc) {
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
	 * GET review -> restaurantId
	 */
	server.get('/reviewsRestaurantId/:restaurantId', (req, res, next) => {
		Menu.find({ restaurantId: req.params.restaurantId }, function(err, doc) {
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
	 * UPDATE review
	 * 
	 */
	server.put('/reviews/:review_id', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		if (!data._id) {
			data = Object.assign({}, data, { _id: req.params.review_id });
		}

		Review.findOne({ _id: req.params.review_id }, function(err, doc) {
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

			Review.update({ _id: data._id }, data, function(err) {
				if (err) {
					console.error(err);
					res.send(500, {
						type: false,
						data: "Review: " + req.params.id + " não encontrado"
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
	 * DELETE review
	 */
	server.del('/reviews/:review_id', (req, res, next) => {
		Review.remove({ _id: req.params.review_id }, function(err) {
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
                data: "Review: " + req.params.id + " removido com sucesso"
            });
			next();
		});
	});


	/**
	 * POST order
	 */
	server.post('/orders', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		let order = new Order(data);
		order.save(function(err) {
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
	 * LIST order
	 */
	server.get('/orders', (req, res, next) => {
		Order.apiQuery(req.params, function(err, docs) {
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
	 * GET order
	 */
	server.get('/orders/:order_id', (req, res, next) => {
		Order.findOne({ _id: req.params.order_id }, function(err, doc) {
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
	 * UPDATE order
	 * 
	 */
	server.put('/orders/:order_id', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		if (!data._id) {
			data = Object.assign({}, data, { _id: req.params.order_id });
		}

		Order.findOne({ _id: req.params.order_id }, function(err, doc) {
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

			Order.update({ _id: data._id }, data, function(err) {
				if (err) {
					console.error(err);
					res.send(500, {
						type: false,
						data: "Order: " + req.params.id + " não encontrado"
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
	 * DELETE order
	 */
	server.del('/orders/:order_id', (req, res, next) => {
		Order.remove({ _id: req.params.order_id }, function(err) {
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
                data: "Order: " + req.params.id + " removido com sucesso"
            });
			next();
		});
	});

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
		Restaurant.apiQuery(req.params, function(err, docs) {
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
		Restaurant.findOne({ _id: req.params.restaurant_id }, function(err, doc) {
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
	 * 
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

		Restaurant.findOne({ _id: req.params.todo_id }, function(err, doc) {
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

			Restaurant.update({ _id: data._id }, data, function(err) {
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
		Restaurant.remove({ _id: req.params.todo_id }, function(err) {
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