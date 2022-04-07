'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
          {
            email: 'demo@user.io',
            username: 'Demo-lition',
            hashedPassword: bcrypt.hashSync('password'),
          },
          {
            email: 'bobbieB@test.io',
            username: 'bobbie',
            hashedPassword: bcrypt.hashSync('password'),
          },
          {
            email: 'marniem@test.io',
            username: 'marnie',
            hashedPassword: bcrypt.hashSync('password'),
          },
        ], {});
      },

      down: (queryInterface, Sequelize) => {
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete('Users', {
          username: { [Op.in]: ['Demo-lition', 'bobbie', 'marnie'] }
        }, {});
      }
};
