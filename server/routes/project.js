var express = require("express");
var router = express.Router();
var ProjectController = require("../controllers/project");

// get all projects
router.get("/", function(req, res){
    ProjectController.getAll(res);
})

// get by id
router.get("/:id", function(req, res){
    ProjectController.getProjectById(req.params.id, res);
})

// post new project 
router.post("/", function(req, res){
    ProjectController.createProject(req.body, res);
})

// put project 
router.put("/", function(req, res){
    ProjectController.updateProject(req.body, res);
})

// delete project by id
router.delete("/:id", function(req, res){
    ProjectController.deleteProject(req.params.id, res);
})

// delete all projects 
router.delete("/delete/all", function(req, res){
    ProjectController.deleteAllProject(res);
})

module.exports = router;