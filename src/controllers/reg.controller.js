const mongoose= require("mongoose")
const regmodel=require("../db/models/reg.model.js")
const bcrypt =require("bcrypt")

async function regapi(req,res){
    try{
    const {username,email,password}=req.body
   const hashpassword=await bcrypt.hash(password,10)
   const userfound= await regmodel.findOne({
    $or:[{
        username:username
    },
    {email:email}
]
})
if(userfound){
    return res.status(400).json({
        message:"Try another user name or email"
    })
}

await regmodel.create({
    username,
    email,
    password:hashpassword
   })

   res.status(200).json({
    message:"Successfully registred"
   })

}
    catch(err){
        res.status(200).json({
            message:"500 error"
        })
        console.log(err)
    }

}
module.exports=regapi