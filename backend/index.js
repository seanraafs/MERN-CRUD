import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import dotenv from "dotenv";


dotenv.config();
const app = express();


const db = mongoose.connection;
db.on("error", (error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("server berjalan... "));

mongoose.connect(process.env.DATABASE, {}).then(() => {
    console.log("database connected");
  });