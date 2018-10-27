var express = require("express");
var router = express.Router();
var UserController = require("../controllers/user");
var { register}    = require('../controllers/auth');

// handle a registration post request

router.post("/register", register);

// get all users
router.get("/", function(req, res){
    UserController.getAll(res);
})

// get by id
router.get("/:id", function(req, res){
    UserController.getUserById(req.params.id, res);
})

// post new user 
router.post("/", function(req, res){
    UserController.createUser(req.body, res);
})  

// put user 
router.put("/", function(req, res){
    UserController.updateUser(req.body, res);
})

// delete user by id
router.delete("/:id", function(req, res){
    UserController.deleteUser(req.params.id, res);
})

// delete all users 
router.delete("/delete/all", function(req, res){
    UserController.deleteAllUser(res);
})

module.exports = router;