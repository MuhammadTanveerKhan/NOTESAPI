const mongoose = require('mongoose')


   const regschema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }


})
const regmodel = new mongoose.model("User",regschema)
 


  module.exports=regmodel 