const mongoose = require('mongoose');

const spellsSchema = mongoose.Schema({
    spellName: { type: String, required: true },
    spellType: { type: String },
    spellEffect: { type: String },
    counterSpell: { type: String }
});

module.exports = mongoose.model('spells', spellsSchema);