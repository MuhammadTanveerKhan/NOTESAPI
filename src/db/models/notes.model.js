const mongoose = require("mongoose")

const notesschema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
})

const notesmodel=new mongoose.model("notesmodel",notesschema)
module.exports=notesmodel