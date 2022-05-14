const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const checkAuth = require("../middlewares/checkAuth");

const { getAllArticles, getArticle, createArticle, updateArticle, deleteArticle, deleteArticles } = require("../controllers/articles"); //This file as a json with all the functionlity of the diffrent HTTP requests so this file will be more clean.

router.get("/", getAllArticles);

router.get("/deleteAll", checkAuth, deleteArticles);

router.get("/:articleId", getArticle);

router.post("/", checkAuth, createArticle); //, upload.single('image'), - If we want to add the option of reciving an image as well.

router.patch("/:articleId", checkAuth, updateArticle);

router.delete("/:articleId", checkAuth, deleteArticle);

module.exports = router;