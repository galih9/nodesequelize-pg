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
          todo_name: 'Ini buat test',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          todo_name: 'Ini buat cek',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {},
    ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Todos', null, {}),
};
