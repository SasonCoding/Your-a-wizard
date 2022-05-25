const express = require('express');
const router = express.Router();
const checkAuth = require("../middlewares/checkAuth");

const { signup, login, getUser, logout, checkEmail } = require("../controllers/users"); //This file as a json with all the functionlity of the diffrent HTTP requests so this file will be more clean.

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/user", checkAuth, getUser);

router.post("/email", checkEmail);

module.exports = router;