const jwt = require("jsonwebtoken");
const AppError = require("../../utils/AppError");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // console.log("token --", token);
    if (!token) {
      throw new Error("Auth failed");
    }
    const decodedToken = jwt.verify(token, "secret");
    // console.log(decodedToken);
    req.user = { id: decodedToken.id };
    next();
  } catch (err) {
    const error = new AppError(401, "Authentication failed");
    return next(error);
  }
};
