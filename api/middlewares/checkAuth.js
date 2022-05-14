const jwt = require("jsonwebtoken");
const BlackList = require("../models/blackList");

const checkAuth = (req, res, next) => {

    try { 
        //const token = req.headers.authorization.split(' ')[1]; //Reciving the jwt token from the header of the http request and using the split function to cut out the Bearer.
        const cookie = req.cookies['jwt'];
        if(cookie) {
            //If the given token was found in the Database we know that this user isnt Auth.
            BlackList.findOne({token: cookie}).then((foundToken) => {
                if(foundToken) {
                    res.status(401).json({
                        message: "Auth failed"
                    })
                } else {//If the token wasnt found.
                    const verify = jwt.verify(cookie, process.env.JWT_SPECIAL_TOKEN);//token- the token that we recived from the header, "Moses..."-The unique token that we have sent to jwt when it created our token.
                    res.locals.verify = verify;//Seting a variable on res so we can use it on the next routes.
                    next();// If everything was ok this middleware can continue to the next one.
                }
            })
        } else {
            res.status(401).json({
                message: "Auth failed"
            })
        }
    } catch(error) {
        res.status(401).json({
            messague: "Auth failed"
        })
    }
} 

module.exports = checkAuth;