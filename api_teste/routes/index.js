
/**
 * Module Dependencies
 */
const errors = require('restify-errors');

/**
 * Model Schema
 */
const Restaurant = require('../models/restaurant');

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
};   