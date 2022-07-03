const express = require('express');
const router = express.Router();

const { getAllSpells, getAllBooks, getAllPotions, getAllHouses, getAllWizards, getAllStudentWizards, getAllStaffWizards, getHouseWizards } = require("../controllers/wizardlyInfo"); //This file as a json with all the functionlity of the diffrent HTTP requests so this file will be more clean.

router.get("/spells", getAllSpells);

router.get("/books", getAllBooks);

router.get("/houses", getAllHouses);

router.get("/potions", getAllPotions);

router.get("/wizards", getAllWizards);

router.get("/wizards/students", getAllStudentWizards);

router.get("/wizards/staff", getAllStaffWizards);

router.get("/house/:wizardlyHouse", getHouseWizards);

module.exports = router;