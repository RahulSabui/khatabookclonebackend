'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: 'userId'});
    }
  }
  customer.init({
    name: DataTypes.STRING,
    money: DataTypes.STRING,
    date: DataTypes.STRING,
    details: DataTypes.TEXT,
    userId:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};