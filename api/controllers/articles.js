const Article = require("../models/article");
const Category = require("../models/category");

module.exports = {
  //Exporting all the functionlity of this route.
  getAllArticles: (req, res) => {
    Article.find()
      .populate("categoryId")
      .then((articles) => { 
        if (articles.length === 0) {
          res.status(200).json({
            message: "Sorry but theres no articles in the DB",
          });
        } else {
          res.status(200).json({
            articles,
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },

  getArticle: (req, res) => {
    //This function recives a unique id from the url and with that id preformes a mongoose method that seaches an article by that id.
    const articleId = req.params.articleId;

    Article.findById(articleId)
      .then((article) => {
        res.status(200).json({
          article,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },

  createArticle: (req, res) => {

    const { title, description, content, categoryId } = req.body;

    if (categoryId.match(/^[0-9a-fA-F]{24}$/)) { //Checking if the categoryId that was supplied is valid.
      Category.findById(categoryId)
      .then((foundCategory) => {
        //If the category wasnt found in the Database meaning that it doesnt exist.
        if (!foundCategory) {
          return res.status(404).json({
            message: "The category id was not found in the Database",
          });
        }

        // An exmple that shows how to prevent duplicate id.
        // } else if(categoryId == category._id) {
        //     status.message = "The given category is already in the Database";
        //     status.code = 404;
        //     return;
        // }

        else {
          var image = undefined;

          if(req.file) {
            image = req.file.path;
            image.replace('\\','/');
          }

          const article = new Article({
            title: title,
            description: description,
            content: content,
            categoryId: categoryId,
            image: image
          });

          return article.save().then((returnedArticle) => {
            if (returnedArticle === article) {
              //Checking if the save method worked.
              return res.status(200).json({
                message: `Article '${title}' was saved succesfully in the Database`,
              });
            } else {
              return res.status(404).json({
                message: `saving the article in the Database as failed`,
              });
            }
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          error,
          message: "The server failed to prefome this request, You might have forgotten to add one of the fields",
        });
      });
    } else {
      res.status(404).json({
        message: "The categoryId that you supplied isnt valid"
      })
    }
  },

  updateArticle: (req, res) => {
    const articleId = req.params.articleId;
    const { categoryId } = req.body;

    if (categoryId) {
      Category.findById(categoryId)
        .then((foundCategory) => {
          if (!foundCategory) {
            res.status(404).json({
              message: "The category id was not found in the Database",
            });
          }
        })
        .catch((error) => {
          res.status(404).json({
            error,
          });
        });
    } else {
      Article.updateOne({ _id: articleId }, req.body).then((foundArticle) => {
        if (foundArticle.matchedCount === 1) {
          //Checking if theres an existing article with the given id.
          res.status(200).json({
            message: `Article ${articleId} was updated`,
          });
        } else {
          res.status(404).json({
            message: `Sorry but ${articleId} wasnt found in the DB`,
          });
        }
      });
    }
  },

  deleteArticle: (req, res) => {
    const articleId = req.params.articleId;

    Article.findById(articleId).then((article) => {
      if(!article) {
        res.status(404).json({
          message: "There is no article that matchs this id"
        })
      } else {
        Article.deleteOne({ _id: articleId })
        .then(() => {
          res.status(200).json({
            message: `Article ${articleId} was deleted`,
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

  deleteArticles: (req, res) => {
    Article.collection.deleteMany({}).then((deleteResult) => {
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
};
