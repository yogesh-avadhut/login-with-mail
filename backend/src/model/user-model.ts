import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String
    },
}, { timestamps: true })


const userModel = mongoose.model("user", userSchema)

export default userModel;