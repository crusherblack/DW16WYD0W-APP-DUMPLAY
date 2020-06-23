'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Transaction', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			startDate: {
				type: Sequelize.DATEONLY
			},
			dueDate: {
				type: Sequelize.DATEONLY
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			attache: {
				type: Sequelize.STRING
			},
			status: {
				type: Sequelize.STRING
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
		return queryInterface.dropTable('Transaction');
	}
};
