var User = require("../models/user");

exports.getAll = function(res){
    User.find({}, function(err, users){
        if(err){
            console.log(err);
        } else {
            res.json(users);
        }
    })
}

exports.getUserById = function(id, res){
    User.find({_id:id}, function(err, user){
        if(err){
            console.log(err);
        } else {
            res.json(user);
        }
    })
}

exports.createUser = function(user, res){
    User.create(user, function(err, newUser){
        if(err){
            console.log(err);
        } else {
            res.json(newUser);
        }
    })
}

exports.updateUser = function(user, res){
    User.findOneAndUpdate({_id:user._id}, user, function(err, updatedUser){
        if(err){
            console.log(err);
        } else {
            exports.getUserById(user._id, res);
        }
    })
}

exports.deleteUser = function(id, res){
    User.remove({_id:id}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

exports.deleteAllUser = function(res){
    User.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

module.exports = exports