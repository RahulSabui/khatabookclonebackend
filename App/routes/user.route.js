const express = require("express");
const userControler = require("../Controller/User/user.controller");
const router = express.Router();

router.post('/users', userControler.user);
router.post('/login', userControler.login);

module.exports = router;