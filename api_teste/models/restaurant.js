
const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');

const RestaurantSchema = new mongoose.Schema(
	{
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
            required: true,
        },
        category: {
			type: String,
            required: true,
        },
        deliveryEstimate: {
			type: String,
            required: true,
        },
        rating: {
			type: Number,
            required: true,
        },
        imagePath: {
			type: String,
            required: true,
        },
        about: {
			type: String,
            required: true,
        },
        hours: {
			type: String,
            required: true,
        }		        
	}
);

RestaurantSchema.plugin(mongooseStringQuery);

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant; 
