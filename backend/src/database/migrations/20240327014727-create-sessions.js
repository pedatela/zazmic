'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('sessions',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
        start: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        duration: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        client_id: {
          type: Sequelize.UUID,
          references: { model: 'clients', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true
        },
        coach_id: {
          type: Sequelize.UUID,
          references: { model: 'clients', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true
        },
        canceled_at: {
          type: Sequelize.DATE
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('sessions');
  }
};
