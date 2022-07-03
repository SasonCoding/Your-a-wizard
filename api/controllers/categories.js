const mongoose = require('mongoose');
const Category = require('../models/category');

module.exports = {
    getAllCategories: (req, res) => {
        Category.find().then((catergories) => {
            if(catergories.length === 0) {
                res.status(200).json({
                    message: "Sorry but theres no categories in the DB"
                })
            } else {
                res.status(200).json({
                    catergories
                })
            }
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    },

    getCategory: (req, res) => { 
        const categoryId = req.params.categoryId;

        Category.findById(categoryId).then((category) => {
            res.status(200).json({
                category
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    },

    createCategory: (req, res) => {
        const { title, description } = req.body;

        const category = new Category({
            title: title,
            description: description
        });

        category.save().then(() => {
            res.status(200).json({
                message: `Category: '${title}' was saved succesfully!!` 
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    },

    updateCategory: (req, res) => {
        const categoryId = req.params.categoryId;

        Category.updateOne({_id: categoryId}, req.body).then((foundCategory) => {
            if(foundCategory.matchedCount === 1) {
                res.status(200).json({
                    message: `${categoryId} was updated succsesfully`
                })
            } else {
                res.status(200).json({
                    message: `${categoryId} wasnt found in the DB`
                })
            }
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    },

    deleteCategory: (req, res) => {
        const categoryId = req.params.categoryId;

        Category.findById(categoryId).then((category) => {
          if(!category) {
            res.status(404).json({
              message: "There is no category that matchs this id"
            })
          } else {
            Category.deleteOne({ _id: categoryId })
            .then(() => {
              res.status(200).json({
                message: `Category ${categoryId} was deleted`,
              });
            })
            .catch((error) => {
              res.status(500).json({
                error,
              });
            });
          }
        }) 
    },

    deleteCategories: (req, res) => {
        Category.collection.deleteMany({}).then((deleteResult) => {
          if(deleteResult) {
            res.status(200).json({
              message: "Succesfully deleted the collection",
              deleteResult
            })
          } else {
            res.status(404).json({
              message: "The server couldent delete the collection"
            })
          }
        }).catch((error) => {
          res.status(500).json({
            error
          })
        })
      }
}