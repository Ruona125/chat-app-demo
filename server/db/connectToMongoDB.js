import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongoDB")
    } catch(error){
        console.log("Error connecting to mongodb")
    }
}

export default connectToMongoDB;