const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: {type: String, requried: true},
    email: {type: String, required: true, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    password: { type: String, required: true },
    profileId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Profile' }
});

module.exports = mongoose.model('Users', userSchema);