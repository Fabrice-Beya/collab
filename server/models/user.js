var mongoose = require("mongoose"),
    bcrypt   = require('bcrypt');

var UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String
    }
});

// add a hook before the document is saved
UserSchema.pre("save", async function (next){
    try {
        if(!this.isModified("password")){
            return next();
        }
        // take the document password hash it usin bcrypt and a salt of 10 and store the hashed password
        // instead of the actual password.
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();

    } catch (error) {
        return next(error)
    }
})

// add a method to the user document to compare a candidate password with the currently saved hashed 
// passowrd
UserSchema.methods.comparePassword = async function(candidatePassword, next){
    try {
        let comparison = await bcrypt.compare(candidatePassword, this.password);
        return comparison;
    } catch (error) {
        return next(error)
    }
}

const User = mongoose.model("User", UserSchema);

module.exports = User;