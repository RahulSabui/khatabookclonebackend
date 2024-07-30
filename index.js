const express = require("express");
const app = express();
const port = 5001;

const userRoute = require("./App/routes/user.route");
const customerRoute = require("./App/routes/customer.route");

app.use(
  express.json({
    limit: "110mb",
    extended: true,
  }) // for parsing application/json
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,DELETE");
  next();
});

app.use("/api/v1/", userRoute);
app.use("/api/v1/c/", customerRoute);

app.use((err, req, res, next) => {
  const { statusCode = 404, message } = err;
  res.send(err.message);
  // res.status(404).json({ err });
  next();
});

app.listen(port, () => {
  console.log(`App is running at the port ${port}`);
});
