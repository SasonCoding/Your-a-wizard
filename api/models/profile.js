const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    wizardlyName: {type: String, required: true},
    dateOfBirth: {type: String, required: true},
    region: {type: String, required: true},
    favoriteSpell: {type: String, required: true},
    house: { type: String, required: true },
});

module.exports = mongoose.model('Profile', profileSchema);

