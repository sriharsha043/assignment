// models/transaction.js
const mongoose = require("mongoose");
const { category } = require("./category");

const TransactionSchema = new mongoose.Schema({
  type: { type: String, required:true },
  category: {
    type: {
    //   type: { type: String },
      name: { type: String },
    },
    // required: true,
  },
  amount: { type: Number},
  date: { type: Date},
  description: { type: String },
//   token: { type: String }, // Store JWT token
//   tokenExpiry: { type: Date }, // Store token expiry time
});

module.exports = mongoose.model("transaction", TransactionSchema);
