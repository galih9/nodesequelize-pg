'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    queryInterface.bulkInsert(
      'Todos',
      [
        {
          userId: 1,
          name: 'Ini buat test',
          description: 'Description',
          image: '',
          location: '',
          story_points: 12,
          status: 0,
          completed: 0,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          name: 'Ini buat cek',
          description: 'Description',
          image: '',
          location: '',
          story_points: 22,
          status: 0,
          completed: 0,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {},
    ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Todos', null, {}),
};
