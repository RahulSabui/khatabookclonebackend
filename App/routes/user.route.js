const express = require("express");
const userControler = require("../Controller/User/user.controller");
const router = express.Router();
const { User } = require("../../models");

router.post("/users", userControler.user);
router.post("/login", userControler.login);

// router.delete("/user/del", (rq, res) => {
//   User.destroy({
//     where: {
//       id: 1,
//     },
//   });
//   res.send("Deleted");
// });

module.exports = router;
