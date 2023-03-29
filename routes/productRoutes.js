const express=require("express")
const { uploads } = require("../middleware/imageStorage")
const router=express.Router()
const productControllers=require("../controllers/productContollers")

router.post("/createProduct",uploads.single("product_Pic"),productControllers.createProduct)
router.patch("/updateProduct/:id",productControllers.editProduct)

module.exports=router