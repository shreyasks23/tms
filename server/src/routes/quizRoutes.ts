import { Router } from "express";
import { getQuestions, setQuestion } from "../controllers/quizController";

const router = Router();

router.get("/questions", getQuestions);
router.post("/question", setQuestion);

export default router;