const express=require("express")
const { register, login } = require("../controller/controller")
let router=express.Router()


router.post("/",register)
router.get("/login",login)


module.exports=router