"use strict";
// const User = require("./user");
// const { DataTypes } = require("sequelize");
// const { sequelize, Sequelize } = require("./index");
// const db = require("./index");
// const Customer = sequelize.define("Customer", {
//   name: DataTypes.STRING,
//   moneyAdded: DataTypes.STRING,
//   date: DataTypes.STRING,
//   details: DataTypes.STRING,
// });

// console.log(db);
// Customer.belongsTo(User, { foreignKey: "created_by" });
// User.hasMany(Customer);
// sequelize.sync({ force: true });

// module.exports = Customer;
const { Model, Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {}
  }
  Customer.init(
    {
      name: DataTypes.STRING,
      moneyAdded: DataTypes.STRING,
      date: DataTypes.STRING,
      details: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );

  return Customer;
};
