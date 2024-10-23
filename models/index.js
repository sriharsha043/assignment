const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.transaction = require("./transaction");
// db.category = require("./category");

db.Category = [{name:'Income', type:'income'},{name:'Expence', type:'expence'}];

module.exports = db;