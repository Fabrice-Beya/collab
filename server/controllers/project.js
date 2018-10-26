var Project = require("../models/project");

exports.getAll = function(res){
    Project.find({}, function(err, projects){
        if(err){
            console.log(err);
        } else {
            res.json(projects);
        }
    })
}

exports.getProjectById = function(id, res){
    Project.find({_id:id}, function(err, project){
        if(err){
            console.log(err);
        } else {
            res.json(project);
        }
    })
}

exports.createProject = function(project, res){
    Project.create(project, function(err, newProject){
        if(err){
            console.log(err);
        } else {
            res.json(newProject);
        }
    })
}

exports.updateProject = function(project, res){
    Project.findOneAndUpdate({_id:project._id}, project, function(err, updatedProject){
        if(err){
            console.log(err);
        } else {
            exports.getProjectById(project._id, res);
        }
    })
}

exports.deleteProject = function(id, res){
    Project.remove({_id:id}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

exports.deleteAllProject = function(res){
    Project.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

module.exports = exports