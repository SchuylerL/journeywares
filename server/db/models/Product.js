const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  cost: {
    type: Sequelize.FLOAT,
  },
  catagory: {
    type: Sequelize.ENUM('armor', 'weapon', 'potion'),
  },
  description: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '/img/products/default-product.jpg',
  },
  id: {
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    type: Sequelize.UUID,
  },
  inStock: {
    type: Sequelize.BOOLEAN,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  class: {
    type: Sequelize.ENUM('warrior', 'mage', 'rouge'),
  },
  stock: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Product;
