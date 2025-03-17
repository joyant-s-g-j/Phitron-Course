import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World 123");
})

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on port 3000")
})

// N6FBtDrLMFiB3d8n
// mongodb+srv://joyantsheikharguptajoy:N6FBtDrLMFiB3d8n@cluster0.nlf4l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0