const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/productData",{useNewUrlParser:true})
const connection=mongoose.connection
connection.once("open",()=>{
    console.log("MongoDB Connect successFully");
})