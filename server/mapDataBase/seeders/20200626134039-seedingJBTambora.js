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
    name: 'Tambora',
    city: 'Jakarta Barat',
    mapName: 'tambora',
    population: 12215,
    homicide: 0,
    assault: 0,
    harassment: 1,
    abduction: 0,
    robbery: 4,
    theft: 6,
    drugs: 11,
    fraudulency: 0,
    anarchism: 0,
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
