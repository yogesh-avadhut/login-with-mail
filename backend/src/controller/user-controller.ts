import { sendVerificationCode } from "../email-service/email";
import { createUser,getAllUser,verifyUser } from "../repository/user-repository";


const addUser = async(req:any,res:any)=>{
    try{
    const userdata = await createUser(req)
    res.send({
        error:false,
        message:"user created successful...",
        data:userdata
    })
    }
    catch(err:any){
        res.send({
            error:true,
            message: "user not created   :(",
            errmsg:err.message

        })
    }

}

const seeAllUsers = async function(req:any,res:any){
    try{
        const users = await getAllUser()
        res.send({
            error:false,
            message: "data fetched successfully",
            data: users
        })
    }
    catch(err:any){
        res.send({
            error: true,
            message:"user data not fetched",
            errMessage:err.message
        })
    }
}


const verifycode = async(req:any,res:any)=>{
    try{
    const userdata = await verifyUser(req,res)

    res.send({
        error:false,
        message:"user verified successful...",
        data:userdata
    })
    }
    catch(err:any){
        res.send({
            error:true,
            message: "user not verified   :(",
            errmsg:err.message

        })
    }

}



export {addUser,verifycode,seeAllUsers}