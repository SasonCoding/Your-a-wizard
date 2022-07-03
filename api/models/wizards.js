const mongoose = require('mongoose');

const wizardsSchema = mongoose.Schema({
    name: { type: String },
    alternate_names: { type: Array },
    species: { type: String },
    gender: { type: String },
    house: { type: String },
    dateOfBirth: { type: String },
    yearOfBirth: { type: Number },
    wizard: { type: Boolean },
    ancestry: { type: String },
    eyeColor: { type: String },
    hairColor: { type: String },
    wand: { type: Object },
    patronus: { type: String },
    hogwartsStudent: { type: Boolean },
    hogwartsStaff: { type: Boolean },
    actor: { type: String },
    alternate_actors: { type: Array },
    alive: { type: Boolean },
    image: { type: String }
});

module.exports = mongoose.model('wizards', wizardsSchema);