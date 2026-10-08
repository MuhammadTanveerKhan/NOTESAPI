const app = require("./src/app.js")
const dotenv=require("dotenv")
const connectdb=require("./src/db/db.js")
dotenv.config()
PORT=process.env.PORT

async function server() {
    await connectdb()

    app.listen(PORT,()=>{
       console.log("SERVER IS SERVED ON PORT")
    })
}
server();