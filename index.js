const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require('express-session');


const authRoute = require("./routes/auth-route");
const profileRoute = require("./routes/profile-route");


require("dotenv").config();
require("./config/passport");
const app = express();
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
}))
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth",authRoute);
app.use("/profile",profileRoute);


mongoose.connect(process.env.DB_CONNECT)
.then
    (
        ()=>{
            console.log("Connected to Mongodb Atlas");
        }
    )
.catch
    (
        (err)=>{
            console.log(err);
        }
    );


app.get('/',(req,res)=>{
    res.render("login");
})


app.listen(8080,()=>{
     console.log("Successfully connected port 8080" )
})