const mongoose = require("mongoose")
const notesmodel = require("../db/models/notes.model.js")

async function getbyid(req,res){
    try{
    const {id} = req.params

    const notefound= await notesmodel.findOne({
        _id:req.params.id,
        user:req.userid
    })

    if(!notefound){
      return   res.status(404).json({
            message:"Note not found",
            
        })

    }
    res.status(200).json({
        notefound
    })
}
catch(error){
    console.log(error)

        res.status(500).json({
           message: "500  server error"

})
    
}
}

module.exports={getbyid}