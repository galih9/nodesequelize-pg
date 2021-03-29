module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        password: '$2a$08$Vl0W41rokaRVc7/byjPg9.tabcy0uwJjRiW8nWvDsm/htPlsq/Z9a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jon Doe',
        email: 'jondoe@example.com',
        password: '$2a$08$Vl0W41rokaRVc7/byjPg9.tabcy0uwJjRiW8nWvDsm/htPlsq/Z9a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};