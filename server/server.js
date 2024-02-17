import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js"
import router from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
dotenv.config()

const app = express();
const PORT = process.env.PORT 
app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => { 
    res.send("hello world")
})

app.use("/api/auth", router)
app.use("/api/message", messageRouter)
app.use("/api/users", userRouter)

app.listen(8000, () => {
    connectToMongoDB()
    console.log(`server running on port ${PORT}`)
})