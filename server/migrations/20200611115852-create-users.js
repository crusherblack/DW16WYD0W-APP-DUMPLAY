'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			fullName: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			},
			password: {
				type: Sequelize.STRING
			},
			role: {
				type: Sequelize.INTEGER
			},
			gender: {
				type: Sequelize.STRING
			},
			phone: {
				type: Sequelize.STRING
			},
			address: {
				type: Sequelize.STRING
			},
			subscribe: {
				type: Sequelize.BOOLEAN
			},
			dueDate: {
				type: Sequelize.DATEONLY
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	}
};
