const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');


const ReviewSchema = new mongoose.Schema(
	{
		name: {
			type: String,
            required: true,
        },
        date: {
			type: Date,
            required: true,
        },
        rating: {
			type: Number,
            required: true,
        },
       comments: {
			type: String,
            required: true,
        },
        restaurantId: {
			type: String,
            required: true,
        }	        
	}
);

ReviewSchema.plugin(mongooseStringQuery);

const Review = mongoose.model('reviews', ReviewSchema);
module.exports = Review; 
