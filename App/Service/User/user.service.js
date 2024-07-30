const { User } = require("../../../models/");
exports.createdCreds = async (body) => {
  try {
    const userCreate = await User.create(body);
    if (userCreate) {
      return true;
    }
  } catch (error) {
    throw error;
  }
};

exports.findUsername = async (username) => {
  try {
    const chkusername = await User.findOne({
      where: {
        username,
      },
    });
    return chkusername;
  } catch (error) {
    throw error;
  }
};
