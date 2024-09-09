import express from "express";
import dotenv from "dotenv"
import databaseConnection from "./config/database.js";


dotenv.config({
    path:".env"
})

databaseConnection();
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is lisiting at port ${process.env.PORT}`)
})