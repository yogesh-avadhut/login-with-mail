import express  from "express";
import { addUser,seeAllUsers,verifycode } from "../controller/user-controller";

const userRoute = express.Router()

userRoute.post('/add-user',addUser)
userRoute.post('/verify-user',verifycode)
userRoute.get("/users",seeAllUsers)

export default userRoute