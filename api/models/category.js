const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    title: { type: String, required: true },//default is a way of securing that the field will have a value if no value was recived.
    description: { type: String, required: true },
});

module.exports = mongoose.model('Category', categorySchema);