const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres:localhost/journeywares`,
  { logging: false },
);

module.exports = db;
