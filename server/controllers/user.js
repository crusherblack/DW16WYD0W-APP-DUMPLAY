const { User } = require('../models');
const Joi = require('@hapi/joi');

exports.getUser = async (req, res) => {
	try {
		const user = await User.findAll({
			attributes: {
				exclude: [ 'password' ]
			}
		});

		if (user) {
			return res.status(200).send({
				status: 'success',
				data: user
			});
		} else {
			return res.status(500).send({
				message: 'Server Error'
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

exports.deleteUser = async (req, res) => {
	try {
		const user = await User.findOne({
			where: {
				id
			}
		});

		if (user) {
			const deleteUser = await User.destroy({
				where: {
					id
				}
			});

			return res.send({
				data: {
					id
				}
			});
		} else {
			return res.status(400).send({
				error: {
					message: 'User Not Found'
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

exports.changeProfile = async (req, res) => {
	try {
		const { id } = req.user;
		const cekUser = await User.findOne({
			where: {
				id
			}
		});

		if (!cekUser)
			return res.status(400).send({
				message: 'User Not Found'
			});

		const updateProfile = await User.update(
			{
				profile: req.file.filename
			},
			{
				where: {
					id
				}
			}
		);

		if (!updateProfile)
			return res.status(400).send({
				message: 'Profile Not Success Created / Try Again '
			});

		const userResult = await User.findOne({
			where: {
				id
			},

			attributes: {
				exclude: [ 'createdAt', 'updatedAt' ]
			}
		});

		return res.status(200).send({
			status: 'success',
			data: userResult
		});
	} catch (err) {
		console.log(err);
		return res.status(500).send({
			error: {
				message: 'Server Error'
			}
		});
	}
};
