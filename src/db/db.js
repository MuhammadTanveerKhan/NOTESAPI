const mongoose = require("mongoose")
const dns=require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])
async function Connectdb(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB CONNECTED")

    }
    catch(error){
        resizeBy.status(500).json({
            message:"500 error",
            message:"Service unavalible temprory "
        })
        console.log("Error in connecting db")
    }
}

module.exports=Connectdb