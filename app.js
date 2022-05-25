const express = require('express'); //Framework that helps with node js server.
const cors = require('cors'); //Enables comunication between diffrent servers.
const morgan = require('morgan'); //Sets a log every time we get an http request.
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
require('dotenv').config();
const articlesRoutes = require("./api/routes/articles");//Importing the articles routes that was exported.
const categoriesRoutes = require("./api/routes/categories");
const usersRoutes = require("./api/routes/users");
const wizardlyRoutes = require("./api/routes/wizardlyInfo");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

//DB connection.
mongoose.connect(process.env.DATA_BASE_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log("DB connected!!");
});

//Middleware for other servers to be able to communicate with this server after allowing the cors.
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:8000', 'http://localhost:4200']
}));

//Routes
//This structure allows us to create diffrent routes in other files and import them to this app.js file and operate them from here.
app.use('/articles', articlesRoutes);
app.use('/categories', categoriesRoutes);
app.use("/users", usersRoutes);
app.use("/wizardlyInfo", wizardlyRoutes);
app.use('/uploads', express.static('uploads'));//This route enables us the option to see an image on the browser.

//Handling unexpected routes/errors.
app.use((req, res, next) => { //Handling errors if we recive one.
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {//If there was an error this will send the respond back to the user with the details of the error.
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            anotherMessage: "Something went wrong and the server couldent preforme your request..."
        }
    })
})

module.exports = app