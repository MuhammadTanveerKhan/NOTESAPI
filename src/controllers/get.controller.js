const mongoose = require("mongoose")
const notesmodel=require("../db/models/notes.model.js")
 

async function getapi(req,res){
   const tasks = await notesmodel.find({})
   try{
if(!tasks){
    res.status(404).json({
        message:"404 error",
        message:"Task not found"
    })
}
   res.status(200).json({
    message:"tasks fetched",
    tasks
   })
   }
   catch(error){
    res.status(500).json({ message:"error 500"})
   
    console.log(error)
   }
}

module.exports={getapi}