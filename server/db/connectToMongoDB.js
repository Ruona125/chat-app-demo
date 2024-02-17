import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongoDB")
        // console.log(process.env.MONGO_URL)
    } catch(error){ 
        console.log(error)
    }
}  

export default connectToMongoDB;