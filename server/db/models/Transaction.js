const db = require('../db');
const Sequelize = require('sequelize');

const Transaction = db.define('transaction', {
  quantity: {
    type: Sequelize.INTEGER,
  },
  totalCost: {
    type: Sequelize.FLOAT,
  },
});

module.exports = Transaction;
