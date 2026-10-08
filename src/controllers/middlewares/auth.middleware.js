const jwt = require("jsonwebtoken")
const authmiddleware = (req,res,next)=>{
   const token = req.cookies.token
   if(!token){
  return   res.status(403).json({
        message:"unauthorize req"
    })

   }
   try{
    const decoded= jwt.verify(token,process.env.JWT_SECRET);
    req.userId=decoded.id
    next()
   }
   catch(error){
    res.status(500).json({
        message:"500 Server Error"
    })
   }
} 

module.exports= authmiddleware