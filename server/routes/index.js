const express = require('express');
const router = express.Router();

const { upload } = require('../middleware/uploadMp3');

const { auth, authAdmin } = require('../middleware/auth');

const { login, register, cekAuth } = require('../controllers/auth');

const { getUser, deleteUser } = require('../controllers/user');

const {
	addTransaction,
	getTransaction,
	editTransaction,
	deleteTransaction
} = require('../controllers/transaction');

// Authentication Routes
router.post('/register', register);
router.post('/login', login);
router.get('/auth', auth, cekAuth);

// User Routes
router.get('/user', auth, authAdmin, getUser);
router.delete('/user/:id', auth, authAdmin, deleteUser);

// Transcation Routes
router.get('/transaction', getTransaction);
router.post('/transaction', auth, upload('attache'), addTransaction);
router.patch('/transaction/:id', auth, authAdmin, editTransaction);
router.delete('/transaction/:id', auth, authAdmin, deleteTransaction);

router.get('*', function(req, res) {
	res.status(404).send({
		error: '404 Not Found'
	});
});

module.exports = router;
