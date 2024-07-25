const {
  createdCreds,
  findUsername,
} = require("../../Service/User/user.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.user = async (req, res) => {
  try {
    const { username, password } = req.body;
    const payload = { username, password: bcrypt.hashSync(password, 12) };

    const create = await createdCreds(payload);

    if (create) {
      return res.status(200).json({
        message: "User created successfully",
      });
    }
  } catch (error) {
    throw error;
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const checkUsername = await findUsername(username);
    if (!checkUsername) {
      return res.status(400).json({
        message: "User not exist !",
      });
    }

    if (!bcrypt.compareSync(password, checkUsername.password)) {
      return res.status(400).json({
        message: "Password not matched !",
      });
    }

    const token = jwt.sign(
      { id: checkUsername.id, username: checkUsername.username },
      "secret",
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      message: "Login successfully !",
      token: token,
    });
  } catch (error) {
    throw error;
  }
};
