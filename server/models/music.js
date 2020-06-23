'use strict';
module.exports = (sequelize, DataTypes) => {
	const Music = sequelize.define(
		'music',
		{
			title: DataTypes.STRING,
			thumbnail: DataTypes.STRING,
			year: DataTypes.STRING,
			singerId: DataTypes.INTEGER,
			attache: DataTypes.STRING
		},
		{}
	);
	Music.associate = function(models) {
		Music.belongsTo(models.Artist, {
			as: 'artist',
			foreignKey: {
				name: 'musicId'
			}
		});
	};
	return Music;
};
