import { Router } from "express";
import { getQuestions, addQuestion } from "../controllers/quizController";

const router = Router();

router.get("/questions", getQuestions);
router.post("/question", addQuestion);

export default router;