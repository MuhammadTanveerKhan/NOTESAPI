const mongoose=require("mongoose")
const notesmodel=require("../db/models/notes.model.js")

async function postnotes(req,res){
    try{
        const {title,content,category}=req.body
      await   notesmodel.create({
            title,
            content,
            category,
            user:req.userId
        })
        res.status(200).json({
            message:"Notes created"
        })
    }
    catch(err){
        res.status(500).json({
            message:"Error 50!",
            message:'Internal server Error',
error:err.message
        })
     
    }
}
module.exports=postnotes