const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    wizardlyName: {type: String, requried: true},
    dateOfBirth: {type: String, requried: true},
    region: {type: String, requried: true},
    favoriteSpell: {type: String, requried: true},
    house: { type: String, required: true },
});

module.exports = mongoose.model('Profile', profileSchema);

