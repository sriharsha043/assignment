// routes/index.route.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Import routes
// const categoryRoutes = require('./categoryRoutes');
const transactionRoutes = require('./transactionRoutes');

// Use routes
// router.use('/api/category', categoryRoutes);
router.use('/transactions', transactionRoutes);
router.use('/summary', transactionController.getTransactionsSummary);


module.exports = router;