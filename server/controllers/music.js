const { Music, Artist } = require('../models');
const Joi = require('@hapi/joi');
const { response } = require('express');

exports.getMusic = async (req, res) => {
	try {
		const { page: pageQuery, limit: limitQuery } = req.query;

		const page = pageQuery ? parseInt(pageQuery) - 1 : 0;
		const pageSize = limitQuery ? parseInt(limitQuery) : 10;

		const paginate = ({ page, pageSize }) => {
			const offset = page * pageSize;
			const limit = pageSize;

			return {
				offset,
				limit
			};
		};

		const cekArtist = await Artist.findOne({
			where: {
				id: req.body.singerId
			}
		});

		if (!cekArtist) {
			return res.status(400).send({
				error: {
					message: 'Artist Not Found'
				}
			});
		}

		const music = await Music.findAll(
			Object.assign(
				{
					include: [
						{
							model: Artist,
							as: 'artist',
							attributes: {
								exclude: [ 'createdAt', 'updatedAt' ]
							}
						}
					],
					order: [ [ 'createdAt', 'DESC' ] ],
					attributes: {
						exclude: [ 'createdAt', 'updatedAt', 'categoryId' ]
					}
				},
				paginate({
					page,
					pageSize
				})
			)
		);

		if (!music) {
			return res.status(400).send({
				error: {
					message: 'Failed To Created Music'
				}
			});
		}
		return res.status(200).send({
			data: music,
			paginationInfo: {
				currentPage: page + 1,
				limit: limitQuery
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

exports.getDetailMusic = async (req, res) => {
	try {
		const { id } = req.params;
		const music = await Music.findOne({
			where: {
				id
			},
			include: [
				{
					model: Artist,
					as: 'artist',
					attributes: {
						exclude: [ 'createdAt', 'updatedAt' ]
					}
				}
			],
			attributes: {
				exclude: [ 'createdAt', 'updatedAt', 'singerId' ]
			}
		});

		if (!music) {
			return res.status(400).send({
				message: 'Films Not Found'
			});
		}

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
			title: Joi.string().min(3).required(),
			year: Joi.string().required(),
			singerId: Joi.required()
		});
		const { error } = schema.validate(req.body);

		if (error)
			return res.status(400).send({
				error: {
					message: error.details[0].message
				}
			});

		const cekArtist = await Artist.findOne({
			where: {
				id: req.body.singerId
			}
		});

		if (!cekArtist)
			return res.status(400).send({
				message: 'Artist Not Found'
			});

		const music = await Music.create({
			...req.body,
			thumbnail: req.file.filename
		});

		if (!music)
			return res.status(400).send({
				message: 'Music Not Success Created / Try Again '
			});

		const musicResult = await Music.findOne({
			where: {
				id: music.id
			},
			include: [
				{
					model: Artist,
					as: 'artist',
					attributes: {
						exclude: [ 'createdAt', 'updatedAt' ]
					}
				}
			],
			attributes: {
				exclude: [ 'createdAt', 'updatedAt', 'singerId' ]
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
