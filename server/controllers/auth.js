const { User } = require('../models');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.cekAuth = async (req, res) => {
	console.log(req.user.id);

	try {
		const user = await User.findOne({
			where: {
				id: req.user.id
			},
			attributes: {
				exclude: [ 'createdAt', 'updatedAt', 'categoryId', 'password' ]
			}
		});
		res.status(200).send({
			status: 'success',
			data: user
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
};

exports.login = async (req, res) => {
	try {
		const schema = Joi.object({
			email: Joi.string().email().min(6).required(),
			password: Joi.string().min(6).required()
		});
		const { error } = schema.validate(req.body);

		if (error)
			res.status(400).send({
				error: {
					message: error.details[0].message
				}
			});

		const { email, password } = req.body;
		const user = await User.findOne({
			where: {
				email
			}
		});

		if (!user)
			return res.status(400).send({
				error: {
					message: 'Wrong Email or Password'
				}
			});

		const validPass = await bcrypt.compare(password, user.password);

		if (!validPass)
			return res.status(400).send({
				error: {
					message: 'Wrong Email or Password'
				}
			});

		const token = jwt.sign(
			{
				id: user.id
			},
			process.env.SECRET_KEY
		);

		res.status(200).send({
			data: {
				email,
				token
			}
		});
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			error: {
				message: 'Server Error'
			}
		});
	}
};

exports.register = async (req, res) => {
	try {
		const schema = Joi.object({
			fullName: Joi.string().min(3).required(),
			email: Joi.string().email().min(6).required(),
			password: Joi.string().min(6).required(),
			gender: Joi.string().required(),
			phone: Joi.string().min(10).required(),
			address: Joi.string().min(10).required(),
			role: Joi.required()
		});
		const { error } = schema.validate(req.body);

		console.log(req.body);

		if (error)
			return res.status(400).send({
				error: {
					message: error.details[0].message
				}
			});

		const { email, password } = req.body;

		const checkEmail = await User.findOne({
			where: {
				email
			}
		});
		if (checkEmail)
			return res.status(400).send({
				error: {
					message: 'Email already exist'
				}
			});

		const subscribe = false;

		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await User.create({
			...req.body,
			password: hashedPassword,
			subscribe
		});
		const token = jwt.sign(
			{
				id: user.id
			},
			process.env.SECRET_KEY
		);

		res.status(200).send({
			data: {
				email,
				token
			}
		});
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			error: {
				message: 'Server Error'
			}
		});
	}
};
