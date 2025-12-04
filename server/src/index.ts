import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { seedQuestions } from "./config/seedQuestions";
import quizRoutes from "./routes/quizRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/quiz", quizRoutes);

app.get("/", (_req, res) => {
  res.send("Quiz API is running");
});

connectDB().then(() => {
  seedQuestions();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});