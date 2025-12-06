import { useState, useEffect } from "react";
import { Question } from "../components/Question";
import type { IQuestion } from "../models/Question";
import { Typography } from "@mui/material";
import { getQuestions } from "../services/questionService";

export const QnAPage = () => {

    const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    getQuestions()
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch questions", err);
      });
  }, []);

  return (
    <>
    <Typography variant="body1">
              Questions loaded: {questions.length}
            </Typography>
          {questions.map((question) => (
            <Question {...question} key={question._id} />
          ))}
    </>
  );
};
