const { Transaction, User } = require('../models');
const Joi = require('@hapi/joi');
const dayjs = require('dayjs');

exports.getTransaction = async (req, res) => {
	try {
		const transaction = await Transaction.findAll({
			include: {
				model: User,
				as: 'userInfo',
				attributes: {
					exclude: [ 'createdAt', 'updatedAt', 'password' ]
				}
			},
			attributes: {
				exclude: [ 'createdAt', 'updatedAt' ]
			},
			order: [ [ 'createdAt', 'DESC' ] ]
		});

		if (transaction) {
			return res.status(200).send({
				data: transaction
			});
		} else {
			return res.status(400).send({
				message: 'Transaction Not Found'
			});
		}
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			message: 'Server Error'
		});
	}
};

exports.addTransaction = async (req, res) => {
	try {
		const schema = Joi.object({
			startDate: Joi.date().required(),
			dueDate: Joi.date().required(),
			userId: Joi.number().required(),
			status: Joi.string().required()
		});
		const { error } = schema.validate(req.body);

		if (error)
			return res.status(400).send({
				error: {
					message: error.details[0].message
				}
			});

		const transaction = await Transaction.create({
			...req.body,
			attache: req.file.filename
		});

		if (transaction) {
			const transactionResult = await Transaction.findOne({
				where: {
					id: transaction.id
				},
				include: {
					model: User,
					as: 'userInfo',
					attributes: {
						exclude: [ 'createdAt', 'updatedAt', 'password' ]
					}
				},
				attributes: {
					exclude: [ 'createdAt', 'updatedAt' ]
				}
			});

			return res.status(200).send({
				data: transactionResult
			});
		} else {
			return res.status(400).send({
				message: 'Please Try Again'
			});
		}
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			message: 'Server Error'
		});
	}
};

exports.editTransaction = async (req, res) => {
	try {
		const { id } = req.params;
		const { status, idUser } = req.body;

		const schema = Joi.object({
			status: Joi.string().required(),
			idUser: Joi.required()
		});
		const { error } = schema.validate(req.body);

		if (error)
			return res.status(400).send({
				error: {
					message: error.details[0].message
				}
			});

		const cekTranscation = await Transaction.findOne({
			where: {
				id
			}
		});

		if (!cekTranscation)
			return res.status(400).send({
				error: {
					message: 'Transcation Not Found'
				}
			});

		const transaction = await Transaction.update(req.body, {
			where: {
				id
			}
		});

		let now = dayjs();
		let dueDate = now.add('30', 'day');

		let update = {};
		if (status == 'Approved') {
			update.subscribe = true;
			update.dueDate = dueDate.format('YYYY-MM-DD');
		}

		console.log(update);

		if (transaction) {
			await User.update(update, {
				where: {
					id: idUser
				}
			});

			const resultTransaction = await Transaction.findOne({
				where: {
					id
				},
				include: {
					model: User,
					as: 'userInfo',
					attributes: {
						exclude: [ 'createdAt', 'updatedAt', 'password' ]
					}
				},
				attributes: {
					exclude: [ 'createdAt', 'updatedAt' ]
				}
			});

			return res.status(200).send({
				data: {
					resultTransaction
				}
			});
		} else {
			return res.status(400).send({
				error: {
					message: 'Try Again'
				}
			});
		}
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			error: {
				message: 'Server Error'
			}
		});
	}
};

exports.deleteTransaction = async (req, res) => {
	try {
		const { id } = req.params;
		const transaction = await Transaction.findOne({
			where: {
				id
			}
		});

		if (transaction) {
			await Transaction.destroy({
				where: {
					id
				}
			});

			return res.status(200).send({
				data: {
					id
				}
			});
		} else {
			return res.status(400).send({
				message: 'Transaction Not Found'
			});
		}
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			error: {
				message: 'Server Error'
			}
		});
	}
};
