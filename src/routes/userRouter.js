import express from "express"
import Usercontroller from "../controller/Usercontroller"


const router=express()
router.get("/user",Usercontroller.createuser)


export default router