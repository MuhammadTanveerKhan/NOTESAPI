const mongoose = require("mongoose")
const notesmodel=require("../db/models/notes.model.js")

async function update(req,res){
    try{

    const {id} = req.params
    const {title,content,category}=req.body

const updated=await notesmodel.findByIdAndUpdate(id,{
    title,
    content,
    category
})

if (!updated) {
            return res.status(404).json({ message: "Note not found to update" });
        }

res.status(200).json({
    message:"Updated",
    updated
})
    }
    catch(error){
        res.status(500).json({
            message:"Error 500",
        })
        console.log(error)
    }

}

module.exports=update