import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    Fname:{
        type:String,
        requered:true
    },
    Lname:{
        type:String,
        requered:true
    },
    Phone:{
        type:Number,
        requered:true,
        unique:true
    },
    Email:{
        type:String,
        requerd:true,
        unique:true
    },
    Password:{
        type:String,
        requered:true
    },
    confirmpassword:{
        type:String,
        requered:true
    },
    Role:{
        type:String,
        enum:["User","Admin"],
        default:"Admin"
    },
    CreatadAt:{
        type:Date,
        default:Date.now()
    }
})

const User=mongoose.model("User",userSchema)

export default User