const express = require("express");
const router = express.Router();
const {
  getCustomer,
  postCustomer,
  getEditCustomer,
  putCustomer,
  deleteCustomer,
} = require("../Controller/customers");
// const catchAsync = require("../../utils/catchAsync");

router.get("/customers", getCustomer);
// router.post("/customers", catchAsync(postCustomer));
// router.get("/customers/:custid", catchAsync(getEditCustomer));
// router.put("/customers/:custid", catchAsync(putCustomer));
// router.delete("/customers/:custid", catchAsync(deleteCustomer));

module.exports = router;
