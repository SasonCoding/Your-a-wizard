const mongoose = require('mongoose');

const blackList = mongoose.Schema({
    token: { type: String, required: true }
});

module.exports = mongoose.model('Blacklist', blackList);