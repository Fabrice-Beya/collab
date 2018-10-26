var mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
    title : {
        type: String,
        default: "Empty Project name"
    },
    description : {
        type: String,
        default: "Empty Project Description"
    },
    collaborators : [{
        id:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        username: String,
    }],
    founder: {
        id:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    }
});

module.exports = mongoose.model("Project", ProjectSchema);