import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from "./routes/posts.router.js";
import userRoutes from "./routes/user.router.js";
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static(path.join(__dirname, 'uploads')));

const start = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 9090, () => {
        console.log(`Server is listening on port ${process.env.PORT || 9090}`);
    });
}

start();