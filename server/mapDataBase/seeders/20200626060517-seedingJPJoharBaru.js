'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Districts', [{
    name: 'Johar Baru',
    city: 'Jakarta Pusat',
    mapName: 'joharBaru',
    population: 117985,
    homicide: 0,
    assault: 1,
    harassment: 10,
    abduction: 1,
    robbery: 12,
    theft: 21,
    drugs: 15,
    fraudulency: 0,
    anarchism: 1,
    status: 'safe',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Districts', null, {});
  }
};
