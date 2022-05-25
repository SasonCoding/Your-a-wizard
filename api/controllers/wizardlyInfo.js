const BooksSchema = require("../models/books");
const SpellsSchema = require("../models/spells");

module.exports = {
    getAllBooks: (req, res) => {
        BooksSchema.find({}, (error, returnedData) => {
            if(error) {
                res.status(404).json({
                    error,
                    message: "Coudlent preforme this query request"
                })
            } else {
                res.status(200).json({
                    returnedData
                })
            }
        })
    },

    getAllSpells: (req, res) => {
        SpellsSchema.find({}, (error, data) => {
            if(error) {
                res.status(404).json({
                    error,
                    message: "Coudlent preforme this query request"
                })
            } else {
                res.status(200).json({
                    data
                })
            }
        })
    }
}