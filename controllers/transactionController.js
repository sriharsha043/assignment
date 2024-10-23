// controllers/transactionController.js
const Transaction = require('../models/transaction');
const buildQuery = require('../utils/queryBuilder')

// Create a new transaction
exports.createTransaction = async (req, res) => {
	try {
		const newTransaction = new Transaction(req.body);
		await newTransaction.save();
		res.status(201).json({ message: 'Transaction Created Successfully' })
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Get a single transaction by ID
exports.getTransactionById = async (req, res) => {
	const { id } = req.params;
	try {
		const transaction = await Transaction.findById(id);
		if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
		res.status(200).json(transaction);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// List all transactions with a generic query builder
exports.listTransactions = async (req, res) => {
	try {
		const { query, options, displayItems } = buildQuery( req.query);
		const transactions = await Transaction.find(query, displayItems, options); // Pass query and options to Mongoose find
		res.status(200).json(transactions);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Update a transaction by ID
exports.updateTransaction = async (req, res) => {
	const { id } = req.params;
	try {
		const transaction = await Transaction.findByIdAndUpdate(id, req.body, { new: true });
		if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
		res.status(200).json({ message: 'Transaction Updated Successfully' });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Delete a transaction by ID
exports.deleteTransaction = async (req, res) => {
	const { id } = req.params;
	try {
		const transaction = await Transaction.findByIdAndDelete(id);
		if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
		res.status(200).json({ message: 'Transaction deleted successfully' });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// get transaction summary
exports.getTransactionsSummary = async (req,res) => {
    try {
		const { query, options, displayItems } = buildQuery(req.body ? req.body : req.query);
		const transactions = await Transaction.find(query, displayItems, options); // Pass query and options to Mongoose find
		res.status(200).json(await getSummary(transactions));
	} catch (error) {
		res.status(500).json({ error: error.message });
	}

};
const getSummary = async (transactions) => {
    let income = 0;
    let expence = 0;
    // let balance = 0;
    await transactions.forEach(transaction => {
        if(transaction.type == 'Income') {
            income+= transaction.amount
        }
        if(transaction.type == 'Expense') {
            expence+= transaction.amount
        }
    });
    return {Income:income,Expense:expence, Balance: income-expence}

} 