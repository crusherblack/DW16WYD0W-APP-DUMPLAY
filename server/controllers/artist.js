const { Music, Artis } = require('../models');
const Joi = require('@hapi/joi');
const { response } = require('express');

exports.getArtist = async (req, res) => {
	try {
		const music = await Artis.findAll(
			Object.assign({
				order: [ [ 'name', 'DESC' ] ],
				attributes: {
					exclude: [ 'createdAt', 'updatedAt' ]
				}
			})
		);

		if (!music)
			return res.status(400).send({
				error: {
					message: 'Music Not Found'
				}
			});

		return res.status(200).send({
			data: music
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

exports.addArtist = async (req, res) => {
	try {
		const schema = Joi.object({
			name: Joi.string().min(3).required(),
			old: Joi.number().required(),
			type: Joi.string().required(),
			startCareer: Joi.date().required()
		});
		const { error } = schema.validate(req.body);

		if (error)
			return res.status(400).send({
				error: {
					message: error.details[0].message
				}
			});

		const music = await Artis.create({
			...req.body
		});

		if (!music)
			return res.status(400).send({
				error: {
					message: 'Artist Not Success Created / Try Again'
				}
			});

		const musicResult = await Artis.findOne({
			where: {
				id: music.id
			},

			attributes: {
				exclude: [ 'createdAt', 'updatedAt' ]
			}
		});

		return res.status(200).send({
			data: musicResult
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
