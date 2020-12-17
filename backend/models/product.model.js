const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({ 
	productName: String,
    productSale: Number,
    productSold: Number,
	productDate: Date, 
	productPrice: Number,
	productFinalPrice: Number,
    productCate: String, 
    productColor: Array, 
	productDes: String,
	productVote: Array, 
	productFeature: Array, 
	},
    {
    	versionKey: false
    }
)

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;
