import express from "express"
import "dotenv/config"
import { connectDB } from "../config/db"
import { router } from "../routes/route"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()
connectDB()

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(cookieParser())
app.use("/", router)

app.listen(process.env.PORT, () => {
    console.log("Server is running on port", `${process.env.PORT}`);
})