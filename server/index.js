// load all enviromental variables
require("dotenv").config();

const express       = require("express"),
    app             = express(),
    userRouter      = require('./routes/user'),
    projectRouter   = require('./routes/project'),
    db              = require('./models'),
    bodyParser      = require('body-parser'),
    cors            = require('cors'),
    errorhander     = require('./controllers/error'),
    PORT            = 3002,
    {authenticate, authorize}   = require('./middleware/auth');

app.use(cors());
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.send("Welcome to the collab backend api");
});

app.use("/api/user", userRouter);
app.use("/api/users/:id/projects", authenticate, authorize, projectRouter);

// get all projects 
app.get("/api/projects", authenticate, async function(req, res, next){
    try {
        let foundProjects = await db.Project.find()
            .sort({createdAt: "desc"})
            .populate("founder", {
                username: true,
                profileImageUrl: true
            });
        return res.status(200).json(foundProjects)
    } catch (error) {
        next(error);
    }
})

// delete all projects 
app.delete("/api/projects", authenticate, async function(req, res, next){
    try {
        await db.Project.remove();
        return res.status(200).json({
            result: "all projects are deleted"
        })
    } catch (error) {
        next(error);
    }
})

//error handling, if it doesnt hit any of the routes send a 404 error.
app.use(function(req, res, next){
    let err     = new Error("Not Found");
    err.status  = 404;
    next(err);
})

// error handler
app.use(errorhander);

app.listen(PORT, function(){
    console.log(`Collab Server is live on ${PORT}`)
})
