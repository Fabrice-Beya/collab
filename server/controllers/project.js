var db = require("../models");

exports.getAll = async function(req, res, next){
    Project.find({}, function(err, projects){
        if(err){
            console.log(err);
        } else {
            res.json(projects);
        }
    })
}

exports.getProjectById = function(req, res, next){
    Project.find({_id:id}, function(err, project){
        if(err){
            console.log(err);
        } else {
            res.json(project);
        }
    })
}

exports.createProject = async function(req, res, next){

    try {
        //  create a new project document, user id is expected from url parameters
        let project = await db.Project.create({
            title: req.body.title,
            description: req.body.description,
            founder: req.params.id
        })

        // find the associated user
        let foundUser = await db.User.findById(req.params.id)
        // add the project id to the user document
        foundUser.projects.push(project.id);
        // save the user
        await foundUser.save(); 

        // build return object
        let foundProject = await db.Project.findById(project.id).populate("founder",{
            username: true,
            profileImageUrl:true
        })
       return res.status(200).json(foundProject);
    } catch (error) {
        next(error);
    }
}

exports.updateProject = async function(req, res, next){
    Project.findOneAndUpdate({_id:project._id}, project, function(err, updatedProject){
        if(err){
            console.log(err);
        } else {
            exports.getProjectById(project._id, res);
        }
    })
}

exports.deleteProject = function(req, res, next){
    Project.remove({_id:id}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

exports.deleteAllProject = function(req, res,next){
    Project.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

module.exports = exports