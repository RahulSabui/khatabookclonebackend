const { Customer } = require("../../models");
const { User } = require("../../models");
const AppError = require("../../utils/AppError");

const {
  getCustomerDetails,
  postCustomerDetails,
  editCustomerDetails,
} = require("../Service/Customer/customer.service");

exports.getCustomer = async (req, res, next) => {
  const customers = await getCustomerDetails();
  // if (!customers) {
  //   const error = new AppError(404, "Customer Not Found");
  //   return next(error);
  // }
  return res.status(200).json(customers);
};

exports.postCustomer = async (req, res, next) => {
  const { name, money, date, details } = req.body;
  // const payload = { name, money, date, details, userId: req.user.id };
  const user = await User.findByPk(req.user.id);
  const payload = { name, money, date, details };
  const customer = await postCustomerDetails(user, payload);
  // if (!customer) {
  //   const error = new AppError(404, "Customer Not Found");
  //   return next(error);
  // }
  return res.status(200).json({ message: "Succesfully created customer" });
};

exports.getEditCustomer = async (req, res, next) => {
  const { custid } = req.params;
  const customer = await Customer.findByPk(custid);
  if (!customer) {
    const error = new AppError(404, "Customer Not Found");
    return next(error);
  }
  res.status(200).json({ customer });
};

exports.putCustomer = async (req, res, next) => {
  const { custid } = req.params;
  const { name, money, date, details } = req.body;
  console.log("Edit data--", custid, name, money, date, details);
  const customer = await editCustomerDetails(
    custid,
    name,
    money,
    date,
    details
  );
  res.status(200).json({ message: "Edited Succesfully" });
};

exports.deleteCustomer = (req, res, next) => {
  const { custid } = req.params;
  Customer.destroy({
    where: {
      id: custid,
    },
  });
  res.status(200).json({ message: "Customer Deleted succesfully" });
};
