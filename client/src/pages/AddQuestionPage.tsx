import { useEffect, useState } from "react";
import { AddQuestion } from "../components/AddQuestion";
import type { IQuestion } from "../models/Question";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  Container,
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
      <Container
        sx={{
          mt: 4,
          mb: 4,
          display: "block",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: 4, minWidth: 600 }}>
          {questions.map((question) => (
            <Accordion key={question._id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">{question.text}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl>
                  <RadioGroup>
                    {question.options.map((opt, index) => {
                      return (
                        <FormControlLabel
                          value={opt._id}
                          control={<Radio checked={opt.isCorrect} />}
                          label={opt.text}
                          key={index}
                        />
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <AddQuestion addQuestions={updateQuestions} />
      </Container>
    </>
  );
};
