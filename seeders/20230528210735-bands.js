'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      name: 'Pink Floyd ',
      genre: 'Classic Rock',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    },{
      name: 'One Repulic',
      genre: 'Pop',
      available_start_time: '2023-06-01T12:00:00',
      end_time: '2023-10-31T23:00:00'
    },{
      name: 'Nirvana',
      genre: 'Classic Rock',
      available_start_time: '2023-04-01T12:00:00',
      end_time: '2023-08-15T12:00:00'
    },{
      name: 'Cold Play',
      genre: 'Pop',
      available_start_time: '2023-06-15T12:00:00',
      end_time: '2023-09-30T12:00:00'
    },{
      name: 'The Beatles',
      genre: 'Rock',
      available_start_time: '2023-07-15T12:00:00',
      end_time: '2023-08-05T12:00:00'
    },{
      name: 'Blink-182',
      genre: 'Punk Rock',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-10-31T12:00:00'
    },{
      name: 'One Direction',
      genre: 'Pop',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bands', null, {});
  }
};