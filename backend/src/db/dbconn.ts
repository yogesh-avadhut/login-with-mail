import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


async function connectdb(){
      if (!process.env.URL) {
    throw new Error("MongoDB URL not found in .env");
  }
    await mongoose.connect(process.env.URL)
    console.log("db connected ...")
}


export {connectdb}