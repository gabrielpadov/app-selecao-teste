const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');


const OrderSchema = new mongoose.Schema(
	{
		array: []
	}
);

OrderSchema.plugin(mongooseStringQuery);

const Order = mongoose.model('orders', OrderSchema);
module.exports = Order; 
