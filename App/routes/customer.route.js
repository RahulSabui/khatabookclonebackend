const express = require("express");
const router = express.Router();
const {
  getCustomer,
  postCustomer,
  getEditCustomer,
  putCustomer,
  deleteCustomer,
} = require("../Controller/customers");
const auth = require("../middleware/auth");
const { catchAsync } = require("../../utils/catchAsync");

router.get("/customers", getCustomer);
router.post("/customers", auth, catchAsync(postCustomer));
router.get("/customers/:custid", auth, catchAsync(getEditCustomer));
router.put("/customers/:custid", auth, catchAsync(putCustomer));
router.delete("/customers/:custid", auth, catchAsync(deleteCustomer));

module.exports = router;
