const db = require('../db');
const Sequelize = require('sequelize');

const { hashPassword } = require('../../utils/commonUtils');

const User = db.define('user', {
  id: {
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    type: Sequelize.UUID,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  class: {
    type: Sequelize.ENUM('warrior', 'mage', 'rouge'),
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  googleId: { type: Sequelize.STRING },
});

User.beforeCreate(userInstance => {
  userInstance.password = hashPassword(userInstance.password);
});

User.verifyPassword = function(user, password) {
  return user.password === hashPassword(password) ? true : false;
};

module.exports = User;
