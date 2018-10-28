const db    = require('../models'),
      jwt   = require('jsonwebtoken');

exports.register = async function(req, res, next){
    try {
        // create a new user from the request body 
        let user = await db.User.create(req.body);
        // destructure user model for ease of use
        let {id, username, email, profileImageUrl} = user;
        // create a jwt token
        let token = jwt.sign(
            {
                id,
                username,
                email,
                profileImageUrl
            },
            process.env.SECRET_KEY
        );

        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        })
    } catch (error) {
        // check for a mongo validation failure
        if(error.code === 11000){
            error.message = "Sorry, Username or Email is already taken."
        }
        
        return next({
            status: 400,
            message: error.message
        })
    }
}

exports.login = async function(req, res, next){
    try {
    // find a user
    let user = await db.User.findOne({
        username: req.body.username
    })

    // destructure user properties
    let {id, username, email, profileImageUrl} = user;

    // check the password entered is correct
    let isMatch = await user.comparePassword(req.body.password)

    if(isMatch){
        // make a token
        let token = jwt.sign({
            id,
            username,
            email,
            profileImageUrl
        },
        process.env.SECRET_KEY
        );
        return res.status(200).json({
            id,
            username,
            email,
            profileImageUrl,
            token
        });
    } else {
        return next({
            status: 400,
            message: "Invalid Username/Password."
        })
    }
        
    } catch (error) {
        return next({
            status: 400,
            message: "Invalid Username/Password."
        })
    }
}

