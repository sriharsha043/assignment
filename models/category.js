// models/category.js

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
 
});

const Category = mongoose.model('category', categorySchema);
module.exports = Category;