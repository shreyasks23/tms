import fs from "fs";
import path from "path";
import { Question } from "../models/Question";

export const seedQuestions = async () => {
  try {
    const data = fs.readFileSync(
      path.join(__dirname, "../../assets/questions.json"),
      "utf-8"
    );
    const questions = JSON.parse(data);
    await Question.insertMany(questions);
    console.log("Questions seeded successfully");
  } catch (error) {
    console.error("Error seeding questions:", error);
  }
};