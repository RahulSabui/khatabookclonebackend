"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Customer.init(
    {
      name: DataTypes.STRING,
      money: DataTypes.STRING,
      date: DataTypes.STRING,
      details: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
