'use strict';
module.exports = (sequelize, DataTypes) => {
	const Music = sequelize.define(
		'music',
		{
			title: DataTypes.STRING,
			thumbnailMusic: DataTypes.STRING,
			year: DataTypes.STRING,
			singerId: DataTypes.INTEGER,
			linkMusic: DataTypes.STRING
		},
		{}
	);
	Music.associate = function(models) {
		// associations can be defined here
	};
	return Music;
};
