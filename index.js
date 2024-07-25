const express = require("express");
const app = express();
const port = 5001;
// const User = require("./models/user");
// const Customer = require("./models/customer");

const userRoute = require("./App/routes/user.route");

app.use(
  express.json({
    limit: "110mb",
    extended: true,
  })
);

app.use("/api/v1/", userRoute);

app.use((err, req, res, next) => {
  res.status(404).json({ err });
  next();
});

app.listen(port, () => {
  console.log(`App is running at the port ${port}`);
});
