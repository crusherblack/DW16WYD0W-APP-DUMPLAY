'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('music', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			title: {
				type: Sequelize.STRING
			},
			thumbnailMusic: {
				type: Sequelize.STRING
			},
			year: {
				type: Sequelize.STRING
			},
			singerId: {
				type: Sequelize.INTEGER
			},
			singerId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'artis',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			linkMusic: {
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
		return queryInterface.dropTable('music');
	}
};
