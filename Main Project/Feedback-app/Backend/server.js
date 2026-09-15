import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import connectDB from "./config/db.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;



connectDB();


app.use(cors());

app.use(express.json());


app.use(
  express.static(
    path.join(process.cwd(), "../Frontend")
  )
);


app.use("/api", feedbackRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});