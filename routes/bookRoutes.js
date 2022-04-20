const express = require("express");
const bookModel = require("../models/book");
let cors = require("cors");
const app = express();
let corsOptions = {
  origin: "http://localhost:3000",
};
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/books", async (req, res) => {
  const books = await bookModel.find({});

  try {
    res.send(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/book", async (req, res) => {
  const book = new bookModel(req.body);
  try {
    await book.save();
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
