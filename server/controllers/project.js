var db = require("../models");

// GET = api/users/:id/projects/:project_id
exports.getProject = async function(req, res, next){

    try {
        let foundProject = await db.Project.findById(req.params.project_id);
        return res.status(200).json(foundProject);
    } catch (error) {
        return next(error);
    }
}

exports.createProject = async function(req, res, next){

    try {
        //  create a new project document, user id is expected from url parameters
        let project = await db.Project.create({
            title: req.body.title,
            subTitle: req.body.subTitle,
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
    try {
        let updatedProject = await db.Project.findByIdAndUpdate(req.params.project_id,req.body);
        return res.status(200).json(updatedProject);
    } catch (error) {
        return next(error);
    }
}

exports.deleteProject = async function(req, res, next){
    try {
        let foundProject = await db.Project.findById(req.params.project_id);
        await foundProject.remove();
        return res.status(200).json(foundProject);
    } catch (error) {
        return next(error);
    }
}

module.exports = exports