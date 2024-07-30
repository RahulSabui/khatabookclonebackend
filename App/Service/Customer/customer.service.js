const { Customer } = require("../../../models");
const { User } = require("../../../models");

exports.getCustomerDetails = async () => {
  try {
    const data = await Customer.findAll();
    return data;
  } catch (error) {
    throw error;
  }
};

exports.postCustomerDetails = async (user, payload) => {
  try {
    const customer = await user.createCustomer(payload);
    // const customer = await Customer.create(body);
    return customer;
  } catch (error) {
    throw error;
  }
};

exports.editCustomerDetails = async (custid, name, money, date, details) => {
  try {
    // const foundCustomer = await Customer.findByPk(custid);
    const customer = await Customer.update(
      { name, money, date, details },
      {
        where: {
          id: custid,
        },
      }
    );
    return customer;
  } catch (error) {
    throw error;
  }
};
