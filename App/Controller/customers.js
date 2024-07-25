const Customer = require("../../models/customer");

exports.getCustomer = async (req, res, next) => {
  const customers = await Customer.findAll();
  console.log(customers);
  res.status(200).json({ customers });
};

exports.postCustomer = async (req, res, next) => {
  const { name, moneyAdded, date, details } = req.body;
  const customer = await Customer.create({ name, moneyAdded, date, details });
  res.redirect("/customers");
};

exports.getEditCustomer = async (req, res, next) => {
  const { custid } = req.params;
  const customer = await Customer.findByPk(custid);
  if (!customer) {
    return res.status(404).json({ message: "Cutomer Not Found" });
  }
  console.log(customer);
  res.status(200).json({ customer });
};

exports.putCustomer = async (req, res, next) => {
  const { custid } = req.params;
  res.redirect("/customers");
};

exports.deleteCustomer = async (req, res, next) => {
  res.redirect("/customers");
};
