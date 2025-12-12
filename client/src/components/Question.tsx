import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import type { IQuestion } from "../models/models";
import { useState, useRef } from "react";
import "./question.css";

interface QuestionProps {
  question: IQuestion;
  showAnswer: boolean;
  onAnswerSelected: (isCorrect: boolean, questionId: string) => void;
}

export const Question = (props: QuestionProps) => {
  const [isCorrectAns, setIsCorrectAns] = useState(false);
  const [showAns, setShowAns] = useState(false);
  const ref = useRef(null);
  const handleAnswerSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isCorrect =
      props.question.options.find(
        (opt) => opt._id?.toString() === event.target.value
      )?.isCorrect || false;
    setIsCorrectAns(isCorrect);
    props.onAnswerSelected(isCorrect, props.question._id!.toString());
  };

  const showAnsAlert = showAns || props.showAnswer;

  const handleCheckAnswer = () => {
    setShowAns(true);
    // props.onAnswerSelected(isCorrectAns, props.question._id!.toString());
  };
  return (
    <div id="question-card">
      <Card sx={{ minWidth: 800 }} variant="outlined" ref={ref}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {props.question.text}
          </Typography>
          <FormControl>
            <RadioGroup onChange={handleAnswerSelection}>
              {props.question.options.map((opt, index) => {
                return (
                  <FormControlLabel
                    value={opt._id}
                    control={<Radio />}
                    label={opt.text}
                    key={index}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          {showAnsAlert && (
            <Alert severity={isCorrectAns ? "success" : "warning"}>
              {isCorrectAns
                ? props.question.description
                : "Wrong answer! Try again"}
            </Alert>
          )}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleCheckAnswer}>
            Check answer
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
