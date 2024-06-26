import mongoose from "mongoose";
import "dotenv/config"

const connectDB = () => mongoose.connect(`${process.env.MONGODB_URL}`)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Couldn't not connect to mongodb"))

export { connectDB }