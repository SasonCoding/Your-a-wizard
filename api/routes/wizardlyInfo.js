const express = require('express');
const router = express.Router();

const { getAllSpells, getAllBooks } = require("../controllers/wizardlyInfo"); //This file as a json with all the functionlity of the diffrent HTTP requests so this file will be more clean.

router.get("/spells", getAllSpells);
router.get("/books", getAllBooks)

module.exports = router;