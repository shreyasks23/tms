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
    if ((await Question.collection.countDocuments()) > 0) {
      console.log("Questions already seeded");
      return;
    } else {
      await Question.insertMany(questions);
    }
    console.log("Questions seeded successfully");
  } catch (error) {
    console.error("Error seeding questions:", error);
  }
};