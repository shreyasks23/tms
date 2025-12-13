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
import type { IQuestion, IUserChoice } from "../models/models";
import { useState } from "react";
import "./question.css";

interface QuestionProps {
  question: IQuestion;
  showAnswer: boolean;
  onAnswerSelected: (userChoice: IUserChoice) => void;
}

export const Question = (props: QuestionProps) => {
  const [isCorrectAns, setIsCorrectAns] = useState(false);
  const [showAns, setShowAns] = useState(false);
  const handleAnswerSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const userChoice = props.question.options.find(
      (opt) => opt._id === event.target.value
    );
    const isCorrect = userChoice?.isCorrect || false;
    setIsCorrectAns(isCorrect);
    props.onAnswerSelected({
      questionId: props.question._id!,
      isCorrect,
      selectedAns: userChoice?.text,
    });
  };

  return (
    <div id="question-card">
      <Card sx={{ minWidth: 800 }} variant="outlined">
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
          {(showAns || props.showAnswer) && (
            <Alert severity={isCorrectAns ? "success" : "warning"}>
              {
                <Typography>
                  {isCorrectAns
                    ? props.question.description
                    : `Wrong! ${props.question.description}`}
                </Typography>
              }
            </Alert>
          )}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setShowAns((prev) => !prev)}>
            Check answer
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
