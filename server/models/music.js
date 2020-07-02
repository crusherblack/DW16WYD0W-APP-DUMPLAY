'use strict';
module.exports = (sequelize, DataTypes) => {
	const Music = sequelize.define('Music', {
		title: DataTypes.STRING,
		thumbnail: DataTypes.STRING,
		year: DataTypes.STRING,
		singerId: DataTypes.INTEGER,
		attache: DataTypes.STRING
	});
	Music.associate = function(models) {
		Music.belongsTo(models.Artis, {
			as: 'artis',
			foreignKey: {
				name: 'singerId'
			}
		});
	};
	return Music;
};
