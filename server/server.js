import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import router from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config()

const app = express();
const PORT = process.env.PORT 
app.use(express.json())

app.get("/", (req, res) => { 
    res.send("hello world")
})

app.use("/api/auth", router)
app.use("/api/message", messageRouter)

app.listen(8000, () => {
    connectToMongoDB()
    console.log(`server running on port ${PORT}`)
})