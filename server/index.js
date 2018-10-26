var express         = require("express"),
    app             = express(),
    userRouter      = require('./routes/user'),
    projectRouter   = require('./routes/project'),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser');

mongoose.connect('mongodb://localhost/collab', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.get("/", function(req, res){
    res.send("Welcome to the collab backend api");
});

app.use("/api/user", userRouter);
app.use("/api/project", projectRouter);

app.listen(3001, function(){
    console.log("Collab Server is live!!!")
})
