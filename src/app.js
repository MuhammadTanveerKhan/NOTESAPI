const express = require("express")
const cookie=require("cookie-parser");
const app = express()
app.use(express.json())
app.use(cookie())
const router=require("./routes/routes.js");

app.use("/notes",router)

module.exports=app;