const { Music, Artist } = require('../models');
const Joi = require('@hapi/joi');
const { response } = require('express');

exports.getArtist = async (req, res) => {
	try {
		const music = await Music.findAll(
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

exports.addMusic = async (req, res) => {
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

		const music = await Music.create({
			...req.body
		});

		if (!music)
			return res.status(400).send({
				error: {
					message: 'Artist Not Success Created / Try Again'
				}
			});

		const musicResult = await Film.findOne({
			where: {
				id: film.id
			},
			include: {
				model: Category,
				as: 'category',
				attributes: {
					exclude: [ 'createdAt', 'updatedAt' ]
				}
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
