require("dotenv").load();
const jwt = require('jsonwebtoken');

// make sure the user is logged in: Authentification

exports.authenticate = function(req, res,next){
    try {
         // to get elements in the header that follows Bearer: xxxx
        const token = req.headers.authorization.split(" ")[1];

        // decode the token
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if(decoded){
                next()
            } else {
                return next({
                    status: 401,
                    message: "Please login in first."
                })
            }
        })
    } catch (error) {
        return next({
            status: 401,
            message: "Please login in first."
        })
    }
   
}

// make sure the user is allowed to performed assocated operation: Authorization
exports.authorize = function(req, res,next){
    try {
         // to get elements in the header that follows Bearer: xxxx
         const token = req.headers.authorization.split(" ")[1];

         // decode the token
         jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
             if(decoded && decoded.id === req.params.id){
                 next()
             } else {
                 return next({
                     status: 401,
                     message: "Unauthorized."
                 })
             }
         })
    } catch (error) {
        return next({
            status: 401,
            message: "Unauthorized."
        })
    }
}