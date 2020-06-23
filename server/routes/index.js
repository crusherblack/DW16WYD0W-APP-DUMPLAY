const express = require('express');
const router = express.Router();

const { upload } = require('../middleware/uploadMp3');
const { uploadImage } = require('../middleware/uploadImage');

const { auth, authAdmin } = require('../middleware/auth');

const { login, register, cekAuth } = require('../controllers/auth');

const { getUser, deleteUser } = require('../controllers/user');

const { getArtist, addArtist } = require('../controllers/artist');

const { getMusic, getDetailMusic, addMusic } = require('../controllers/music');

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

// Artist Routes
router.get('/artist', getArtist);
router.post('/artist', auth, authAdmin, addArtist);

// Music Routes
router.get('/music', getMusic);
router.get('/music/:id', auth, getDetailMusic);
router.post(
	'/music',
	auth,
	authAdmin,
	upload('attache'),
	uploadImage('thumbnail'),
	addMusic
);

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
