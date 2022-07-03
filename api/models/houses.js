const mongoose = require('mongoose');

const HousesSchema = mongoose.Schema({
    // houseName: { type: String },
    // houseMascot: { type: String },
    // headOfHouse: { type: String },
    // houseGhost: { type: String },
    // houseFounder: { type: String },
    // houseSchool: { type: String },
});

module.exports = mongoose.model('houses', HousesSchema);