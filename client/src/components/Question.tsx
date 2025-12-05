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
import type { IQuestion } from "../models/Question";
import { useState, useRef } from "react";
import "./question.css";

export const Question = (props: IQuestion) => {
  const [isCorrectAns, setIsCorrectAns] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const ref = useRef(null);
  const handleAnswerSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (props.correctIndex === parseInt(event.target.value)) {
      setIsCorrectAns(true);
    } else {
      setIsCorrectAns(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(() => {
      if (isCorrectAns) {
        return true;
      }
      return false;
    });
  };
  return (
    <div id="question-card">
      <Card sx={{ minWidth: 800 }} variant="outlined" ref={ref}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {props.text}
          </Typography>
          <FormControl>
            <RadioGroup onChange={handleAnswerSelection}>
              {props.options.map((opt, index) => {
                return (
                  <FormControlLabel
                    value={index}
                    control={<Radio />}
                    label={opt}
                    key={index}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          {showAnswer && (
            <Alert severity={isCorrectAns ? "success" : "warning"}>
              {isCorrectAns ? props.description : "Wrong answer! Try again"}
            </Alert>
          )}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleShowAnswer}>
            Check answer
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
