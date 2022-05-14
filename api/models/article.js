const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: { type: String, required: true },//default is a way of securing that the field will have a value if no value was recived.
    description: { type: String, required: true },
    content: { type: String, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Category' },
    image: { type: String }
});

module.exports = mongoose.model('Article', articleSchema);