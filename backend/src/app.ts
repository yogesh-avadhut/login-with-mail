import express from "express"
import {connectdb} from './db/dbconn'
import userRoute from "./route/user-route";

const app = express()
app.use(express.json());



app.use('/api',userRoute)



connectdb().then(()=>{
app.listen(3000,()=>{
    console.log("server is running ...")
})
})
