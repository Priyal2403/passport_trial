const mongoose = require("mongoose") 

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            minLength:2,
            maxLength:255
            },
            googleID:{
                type:String,
            },
            date:{
                type:Date,
                default:Date.now,
            },
            thumbnail:{
                type:String,
            },
            email:{
                type:String,
            }
    }
);

module.exports = mongoose.model("User",userSchema)