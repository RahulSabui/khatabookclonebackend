const express = require("express")
const app = express()
const port =5001

const userRoute = require("./App/Route/user.route");

app.use(
    express.json({
      limit: "110mb",
      extended: true,
    })
  );

app.use("/api/v1/",userRoute)


app.listen(port, ()=>{
    console.log(`App is running at the port ${port}`);
})