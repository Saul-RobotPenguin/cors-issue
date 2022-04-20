const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: String, required: true },
  genres: { type: [String], required: true },
  ISBN: { type: String, required: true },
  imageLink: { type: String, required: true },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
