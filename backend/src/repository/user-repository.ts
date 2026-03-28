
import { sendVerificationCode, WelcomeEmail } from "../email-service/email";
import userModel from "../model/user-model";
import bcryptjs from "bcryptjs"



const createUser = async (req: any) => {
    const { email, password, userName } = req.body
    if (!email || !password || !userName) {
        throw new Error("All fields are required....")
    }
    const ExistUser = await userModel.findOne({ email })
    if (ExistUser) {
        throw new Error("user already exist....")

    }
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
    const hashedPass = await bcryptjs.hash(password, 10)
    const user = new userModel({
        email,
        password: hashedPass,
        userName,
        verificationCode
    })

    await user.save()
    await sendVerificationCode(user.email, verificationCode)
    return user
}



const verifyUser = async (req: any, res: any) => {

    const { code } = req.body
    const useravaliable = await userModel.findOne({
        verificationCode: code
    })

    if (!useravaliable) {
        throw new Error("incorrect code ...")
    }

    useravaliable.isVerified = true,
        useravaliable.verificationCode = undefined
    await WelcomeEmail(useravaliable.email, useravaliable.userName)
    await useravaliable.save()
    res.send({
        error: false,
        message: "Email verified successfully",
        data: useravaliable
    })
}


const getAllUser = async function () {
    const userData = userModel.find()
    return userData
}

const getUserById = async function (parms: any) {
    const id = parms.id
    const user = userModel.findById({ id })
    return user
}

const deleteUserById = function (parms: any) {
    const id = parms.id
    const user = userModel.findByIdAndDelete({ id })
    return user
}


export { createUser, verifyUser, getAllUser}