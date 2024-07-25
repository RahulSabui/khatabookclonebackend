const { DataTypes } = require("sequelize");
// const { sequelize, Sequelize } = require("./index");
const User = require("./user");
const Customer = require("./customer");

Customer.User = Customer.belongsTo(User);
User.Customer = User.hasMany(Customer);
