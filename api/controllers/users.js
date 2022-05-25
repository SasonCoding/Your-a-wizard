const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/users");
const BlackList = require("../models/blackList");
const Profile = require("../models/profile");

module.exports = {
    
    signup: (req, res) => {
        const { firstName, lastName, wizardlyName, dateOfBirth, region, favoriteSpell, house, email, password } = req.body;
        
        bcrypt.hash(password, 10, (error, hash) => { //password-who will be hased, 10-amount of hash`s, (error, hash)-callback function with the given hashed password and an error.
            if(error) {
                return res.status(500).json({
                    error
                });
            }

            const profile = new Profile({
                wizardlyName: wizardlyName,
                dateOfBirth: dateOfBirth,
                region: region,
                favoriteSpell: favoriteSpell,
                house: house
            });

            profile.save().then((savedProfile) => {
                const user = new User({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: hash, //Passing the hashed value as the password to the user model.
                    profileId: savedProfile.id
                })
    
                return user.save().then(() => {
                    return res.status(200).json({
                        message: `User ${email} was saved succesfully`
                    });
                }).catch((error) => {
                    if(error.code == 11000) {
                        return res.status(409).json({
                            message: "This email already exsits in the database"
                        })
                    } else {
                        return res.status(500).json({
                            message: "Server couldent save the user",
                            error
                        });
                    }
                })
            }).catch((error) => {
                res.status(404).json({
                    error,
                    message: "Maby you havent filled one of the required fields"
                })
            })
        })
    },

    login: (req, res) => {
        const { email, password} = req.body;

        User.find({ email }).then((users) => {
            if(users.length === 0) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }

            const [ user ] = users; //Destructioring the user that was found in the db from the users.
            
            bcrypt.compare(password, user.password, (error, result) => { //password-the password that we recived from the request, user.password-the password thats in the database, (error, result)-result is the boolean value that is returned from the compareson.
                if(error) {
                    return res.status(401).json({
                        message: "Auth failed"
                    });
                }
                
                if(result) {
                    const token = jwt.sign({ //Creating a token with jwt that will be sent back to the user who as sent the http request to signin.
                        id: user._id,
                        email: user.email,
                    },  process.env.JWT_SPECIAL_TOKEN,//The value of the unique token(In real life application we can do something more secure). 
                        {expiresIn: "1H"}//The expiresion time on the token, After one hour the token will be expired and the user will need to send a new request to recive a new token.
                    );

                    res.cookie('jwt', token, { httpOnly: true }, (60 * 60 * 1000));

                    return res.status(200).json({
                        message: "Succesfully logged in"
                    })
                }

                res.status(401).json({
                    message: "Auth failed"
                });
            })
        })
    },

    logout: (req, res) => {
        const currentToken = req.cookies.jwt;

        if(currentToken) {
            const blackList = new BlackList({ token: currentToken });
            
            blackList.save().then(() => {//Saving the token in the database so users wont be able to make requests with the expired token.
                res.clearCookie('jwt');
                res.status(200).json({
                    message: "Succesfully logged out"
                })
            }).catch((error) => {
                res.status(404).json({
                    error,
                    message: "The Database failed to preforme this request."
                })
            })
        } else {
            res.status(404).json({
                message: "No token was recived with the current request."
            })
        }
    },

    getUser: (req, res) => { //This request returns the name of the user that matchs the id that is in the cookie of the currently logged user.
        const userId = res.locals.verify.id
        User.findById(userId).then((foundUser) => {
            const { name: userName } = foundUser
            res.status(200).json({
                foundUser
            })
        }).catch((error) => {
            res.status(401).json({
                error
            })
        })
    },

    checkEmail: (req, res) => {
        const { email } = req.body;
        User.find({ email }).then((users) => {
            if(users.length >= 1) {
                return res.status(409).json({
                    message: "This email already exsits in the database"
                });
            }
            res.status(200).json({
                message: "The email is valid",
            });
        }).catch((error) => {
            res.status(500).json({
                error
            });
        })
    }
}