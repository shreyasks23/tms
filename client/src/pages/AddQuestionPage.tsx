import { useEffect, useState } from "react";
import { AddQuestion } from "../components/AddQuestion";
import type { IQuestion } from "../models/Question";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AddQuestionPage = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/quiz/questions")
      .then((res) => res.json())
      .then(setQuestions)
      .catch((err) => console.error("Failed to fetch questions", err));
  }, []);

  const updateQuestions = (newQuestion: IQuestion) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };
  return (
    <>
      {questions.map((question) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">{question.text}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {question.options.map((option, index) => (
              <Typography key={index} component="div">
                {option.text} {option.isCorrect ? "(Correct)" : ""}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      ;
      <AddQuestion addQuestions={updateQuestions} />
    </>
  );
};
