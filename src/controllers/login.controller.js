const mongoose  =  require("mongoose");
const logmodel=require("../db/models/reg.model.js");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cookie=require("cookie-parser");
async function loginapi(req,res){
    try{
    const {username,email,password}=req.body
    const found=await logmodel.findOne({email}
    )
    
    if(!found){
        return  res.status(404).json({
            message:"User notfound"
        })
       
    }
    let pasword=await bcrypt.compare(password,found.password)
     if(!pasword){
        
        return  res.status(404).json({
            message:"Incorrect password"
    })
    
  }
  const token =jwt.sign({id:found._id},
    process.env.JWT_SECRET
)
res.cookie("token",token)

res.status(200).json({
  message:`Welcomeback ${found.username} `    
})
}
catch(error){
    res.status(500).json({
        message:"Error 500 Server error"
    })
    console.log(error)
    }
}

module.exports=loginapi