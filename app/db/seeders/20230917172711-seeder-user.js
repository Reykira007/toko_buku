'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const password = bcrypt.hashSync('rey150101', 10);
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Ari Januari',
          email: 'rearryc@gmail.com',
          password: password, // Simpan hash password
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {}); // Ganti "People" menjadi "Users"
  },
};
