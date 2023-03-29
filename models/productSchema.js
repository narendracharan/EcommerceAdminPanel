const mongoose=require("mongoose")

const schema= new mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    product_Pic:{
        type:String,
        require:true
    },
    productTitle:{
        type:String,
        require:true
    },
    productDescription:{
        type:String,
        require:true
    },
    productPriceOld:{
        type:Number,
        require:true
    },
    productPriceNew:{
        type:Number,
        require:true
    },
  productUrl:{
    type:String,
    require:true
  }
})

schema.set("timestamps",true)
module.exports=mongoose.model("product",schema)