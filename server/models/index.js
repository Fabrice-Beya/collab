const mongoose = require('mongoose');

// see the actual mongo comamnds in the output 
mongoose.set("debug", true);

// run away from callbacks and use async function which return promises
mongoose.Promise = Promise;

// connect to a local database
mongoose.connect('mongodb://localhost/collab', { 
    keepAlive: true,
    useNewUrlParser: true 
});

module.exports.User = require("./user");
module.exports.Project = require("./project");

