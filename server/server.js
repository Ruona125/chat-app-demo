import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import router from "./routes/auth.routes.js";
dotenv.config()

const app = express();

const PORT = process.env.PORT 

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/api/auth", router)

app.listen(8000, () => {
    console.log(`server running on port ${PORT}`)
})