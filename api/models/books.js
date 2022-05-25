const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    bookTitle: { type: String },
    bookReleaseDay: { type: String },
    bookAuthor: { type: String },
    bookDescription: { type: String }
});

module.exports = mongoose.model('books', booksSchema);