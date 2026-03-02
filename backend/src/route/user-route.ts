import express  from "express";
import { addUser,verifycode } from "../controller/user-controller";


const userRoute = express.Router()

userRoute.post('/add-user',addUser)
userRoute.post('/verify-user',verifycode)


export default userRoute