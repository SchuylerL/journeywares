const db = require('../db');
const Sequelize = require('sequelize');

const Cart = db.define('cart', {
  memberStatus: {
    type: Sequelize.ENUM('guest', 'user'),
  },
  memberId: {
    type: Sequelize.STRING,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Cart;
