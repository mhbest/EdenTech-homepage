const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemsSchema = new ItemsSchema({
	item: string,
	price: string,
	
});

module.exports = mongoose.model('Items',ItemsSchema)