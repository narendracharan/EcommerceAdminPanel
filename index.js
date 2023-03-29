const express=require("express")
const bodyparser=require("body-parser")
const app=express()
require("./models/config")
app.use(bodyparser.json())
const router=require("./routes/productRoutes")
app.use("/",router)

app.listen(5000,()=>{
    console.log("Server is running port no:5000");
})
