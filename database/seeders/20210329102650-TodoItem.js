'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      'TodoItems',
      [
        {
          id: 1,
          description: 'Ini buat test',
          location: 'location 1',
          story: 10,
          image: 'base64',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          description: 'deskripsi 2',
          location: 'location 2',
          story: 27,
          image: 'base64',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('TodoItems', null, {}),
};
