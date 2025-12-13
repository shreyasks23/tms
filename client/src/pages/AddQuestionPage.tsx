import { useEffect, useState } from "react";
import { AddQuestion } from "../components/AddQuestion";
import type { IQuestion } from "../models/models";
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
import { getQuestions } from "../services/questionService";

export const AddQuestionPage = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    getQuestions().then((res) => {
      setQuestions(res.data);
    });
  }, []);

  const updateQuestions = (newQuestion: IQuestion) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-stretch",
          top: 50,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 2,
        }}
      >
        <Box sx={{ p: 2, minWidth: 500 }}>
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
                          control={<Radio disabled checked={opt.isCorrect} />}
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
        <Box sx={{ p: 2, minWidth: 300 }}>
          <AddQuestion addQuestions={updateQuestions} />
        </Box>
      </Container>
    </>
  );
};
