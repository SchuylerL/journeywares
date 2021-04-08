const db = require('./db');
const Cart = require('./models/Cart');
const Product = require('./models/Product');
const Review = require('./models/Review');
const Transaction = require('./models/Transaction');
const User = require('./models/User');

Product.hasMany(Review);
Transaction.belongsTo(Product);
User.hasMany(Review);
User.hasMany(Transaction);
Review.belongsTo(Product);
Cart.belongsTo(Product);
Cart.belongsTo(User);

module.exports = {
  db,
  Cart,
  Product,
  Review,
  Transaction,
  User,
};
