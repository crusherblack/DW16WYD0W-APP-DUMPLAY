'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			fullName: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			role: DataTypes.INTEGER,
			gender: DataTypes.STRING,
			phone: DataTypes.STRING,
			address: DataTypes.STRING,
			subscribe: DataTypes.BOOLEAN,
			dueDate: DataTypes.DATEONLY,
			profile: DataTypes.STRING
		},
		{}
	);
	User.associate = function(models) {
		// associations can be defined here
	};
	return User;
};
