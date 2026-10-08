const mongoose = require("mongoose")
const notesmodel=require("../db/models/notes.model.js")

async function deletenote(req,res){
    try{
        const {id}=req.params
        const deletenote= await notesmodel.findOneAndDelete({
            _id:req.params,
           user:req.userid
        })
        if(!deletenote){
          return  res.status(404).json({
                message:"Note not found"
            })
        }
        res.status(200).json({
               message:"Note deleted"
           })
    }
    catch(err){
        res.status(500).json({
            message:"Error 500"
        })
        console.log(err)
    }
}
module.exports=deletenote