import { Request, Response } from "express";
import { IQuestion, Question } from "../models/Question";

export const getQuestions = async (_req: Request, res: Response) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: "Failed to load questions" });
  }
};

export const addQuestion = async (_req: Request, res: Response) => {
  const question = _req.body.question as IQuestion;
  try {
    const questionAdded = await Question.insertOne(question);
    res.json(questionAdded);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};