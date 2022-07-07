const BooksSchema = require("../models/books");
const SpellsSchema = require("../models/spells");
const wizardsSchema = require("../models/wizards");
const HousesSchema = require("../models/houses");
const PotionsSchema = require("../models/potions");

module.exports = {
    //API for the Harry Potter Characters.
    getAllWizards: (req, res) => {
        wizardsSchema.find({}, (error, returnedCharacters) => {
            if(error) {
                res.status(404).json({
                    error,
                    message: "Couldn't preform this query request"
                })
            } else {
                res.status(200).json({
                    returnedCharacters,
                    message: "Successfully fetched the wizardly data"
                })
            }
        })
    },

    getAllStudentWizards: (req, res) => {
        wizardsSchema.find({hogwartsStudent: true}, (error, returnedCharacters) => {
            if(error) {
                res.status(404).json({
                    error,
                    message: "Couldn't preform this query request"
                })
            } else {
                res.status(200).json({
                    returnedCharacters
                })
            }
        })
    },

    getAllStaffWizards: (req, res) => {
        wizardsSchema.find({hogwartsStaff: true}, (error, returnedCharacters) => {
            if(error) {
                res.status(404).json({
                    error,
                    message: "Couldn't preform this query request"
                })
            } else {
                res.status(200).json({
                    returnedCharacters
                })
            }
        })
    },
    //API for the all the wizards from a specific house.
    getHouseWizards: (req, res) => {
        const wizardlyHouse = req.params.wizardlyHouse;

        wizardsSchema.find({house: wizardlyHouse}, (error, returnedCharacters) => {
            if(error) {
                res.status(404).json({
                    error,
                    message: "Couldn't preform this query request"
                })
            } else {
                res.status(200).json({
                    returnedCharacters
                })
            }
        })
    },
    //API for the Harry Potter Books.
    getAllBooks: (req, res) => {
        BooksSchema.find({}, (error, returnedBooks) => {
            if(error) {
                res.status(404).json({
                    error,
                    message: "Couldn't preform this query request"
                })
            } else {
                res.status(200).json({
                    returnedBooks
                })
            }
        })
    },
    //API for the Harry Potter Spells.
    getAllSpells: (req, res) => {
        SpellsSchema.find({}, (error, returnedSpells) => {
            if(error) {
                res.status(404).json({
                    error,
                    message: "Couldn't preform this query request"
                })
            } else {
                res.status(200).json({
                    returnedSpells
                })
            }
        })
    },

    getAllHouses: (req, res) => {
        HousesSchema.find({}, {members: 0}, (error, returnedHouses) => { //members: 0 = don't pull 'members' data from the database.
            if(error) {
                res.status(404).json({
                    error,
                    message: "Couldn't preform this query request"
                })
            } else {
                res.status(200).json({
                    returnedHouses
                })
            }
        })
    },

    getAllPotions : (req, res) => {
        PotionsSchema.find({}, (error, returnedPotions) => { //members: 0 = don't pull 'members' data from the database.
            if(error) {
                res.status(404).json({
                    error,
                    message: "Couldn't preform this query request"
                })
            } else {
                res.status(200).json({
                    returnedPotions
                })
            }
        })
    }
}