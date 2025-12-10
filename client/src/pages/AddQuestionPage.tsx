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
          alignItems: "center",
          justifyContent: "flex-stretch",
        }}
      >
        <Box sx={{ p: 2, minWidth: 500, border: "1px dotted gray" }}>
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
