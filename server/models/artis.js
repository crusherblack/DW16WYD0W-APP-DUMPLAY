'use strict';
module.exports = (sequelize, DataTypes) => {
	const Artis = sequelize.define(
		'artis',
		{
			name: DataTypes.STRING,
			old: DataTypes.STRING,
			type: DataTypes.STRING,
			startCareer: DataTypes.DATE
		},
		{}
	);
	Artis.associate = function(models) {
		// associations can be defined here
	};
	return Artis;
};
