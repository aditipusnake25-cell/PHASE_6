import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(process.cwd(), "Frontend")));

app.use("/api", contactRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});