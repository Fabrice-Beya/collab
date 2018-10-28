const mongoose = require("mongoose");
const User     = require('./user');

var ProjectSchema = new mongoose.Schema({
    title : {
        type: String,
        default: "Empty Project name",
        maxlength: 160
    },
    description : {
        type: String,
        default: "Empty Project Description"
    },
    founder: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    collaborators : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }]
},
{
    timestamps: true
}
);

// add a hook to delete a project from a user projects list 
ProjectSchema.pre('remove', async function(next){
    try {
        // find the associated user
        let user = await User.findById(this.founder);
        // remove project from user list
        user.remove(this.id);
        // save the user
        await user.save();

        return next();
    } catch (error) {
        next(error)
    }
})

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project