
import {transporter }from "./email-config";
import { Verification_Email_Template, Welcome_Email_Template } from "../utility/email-templte";


 const sendVerificationCode = async (email:any,verificationCode:any) => {
    try {
        const response = await transporter.sendMail({
            from: '"Yogi Soft 👨‍💻" <dev.yogeshavadhut@gmail.com>',
            to: email,
            subject: " verify your email",
            text: "verify your mail...", // Plain-text version of the message
            html: Verification_Email_Template.replace("{verificationCode}",verificationCode) // HTML version of the message  
        })
        console.log("email sent successfull....",response)
    }
    catch (err) {
        console.log("error in email fie send verificationEmail fn :", err)
    }
}


 const WelcomeEmail = async (email:any,username:any) => {
    try {
        const response = await transporter.sendMail({
            from: '"Yogi Soft 👨‍💻" <dev.yogeshavadhut@gmail.com>',
            to: email,
            subject: " verify your email",
            text: "verify your mail...", // Plain-text version of the message
            html: Welcome_Email_Template.replace("{name}",username) // HTML version of the message  
        })
        console.log("email sent successfull....",response)
    }
    catch (err) {
        console.log("error in email fie send verificationEmail fn :", err)
    }
}

export {sendVerificationCode,WelcomeEmail}