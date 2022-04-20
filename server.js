require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRouter = require("./routes/bookRoutes.js");

let corsOptions = {
  origin: "http://localhost:3000",
};
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

mongoose.connect(process.env.MONGO_DB_CLUSTER, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bookRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running ${process.env.PORT}`);
});
// listen(PORT, "localhost");
const db = mongoose.connection;
module.exports = db;
