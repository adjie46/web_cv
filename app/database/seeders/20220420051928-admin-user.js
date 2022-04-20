'use strict';

const { uuid } = require('uuidv4')

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Admins', [{
      id: uuid().replace("-",""),
      fullName: 'admin',
      username: 'admin',
      password: '$2a$10$cY88DjWYTqoaDAKD9VQAUOAkmKhpLOkg5zG0YWnvNopnNWnJmTcB2',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Admins', null, {})
  }
};
