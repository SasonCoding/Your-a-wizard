const express = require('express');
const router = express.Router();
const checkAuth = require("../middlewares/checkAuth");

const { getAllCategories, createCategory, updateCategory, deleteCategory, getCategory, deleteCategories } = require("../controllers/categories"); //This file as a json with all the functionlity of the diffrent HTTP requests so this file will be more clean.

router.get("/", getAllCategories);

router.get("/deleteAll", checkAuth, deleteCategories);

router.get("/:categoryId", getCategory);

router.post("/", checkAuth, createCategory);

router.patch("/:categoryId", checkAuth, updateCategory);

router.delete("/:categoryId", checkAuth, deleteCategory);

module.exports = router;