const express = require("express");

const colors = require("colors");
const connectDb = require("./config/db");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

connectDb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  app.get('/api/goals',(req,res) => {
//     res.status(200).json({message:'GETTING GOALS YOU BITCH'})

//   })

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  return console.log("server started on port " + port);
});
