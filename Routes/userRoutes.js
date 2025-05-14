import express from "express"
import { createUser, getAllusers, userLogin } from "../Controllers/userController.js"
import userauth from "../Controllers/middleware/auth.js"
const router= express.Router()

router.post("/",createUser)
router.post("/login",userLogin)
router.get("/allusers",userauth,getAllusers)
export default router