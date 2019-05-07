const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');

const MenuSchema = new mongoose.Schema(
	{ 
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
            required: true,
        },
        description: {
			type: String,
            required: true,
        },
        price: {
			type: Number,
            required: true,
        },
        imagePath: {
			type: String,
            required: true,
        },
        restaurantId: {
			type: String,
            required: true,
        }	        
	}
);

MenuSchema.plugin(mongooseStringQuery);

const Menu = mongoose.model('menus', MenuSchema);
module.exports = Menu; 
