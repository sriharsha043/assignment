// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
// const authMiddleware = require("../middleware/authMiddleware")


// CRUD Routes
router.post('/', transactionController.createTransaction);
router.get('/:id', transactionController.getTransactionById);
router.get('/', transactionController.listTransactions);
router.put('/:id', transactionController.updateTransaction);
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;