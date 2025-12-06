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
    setShowAnswer(false);
    const isCorrect =
      props.options.find((opt) => opt._id?.toString() === event.target.value)
        ?.isCorrect || false;

    setIsCorrectAns(isCorrect);
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
                    value={opt._id}
                    control={<Radio />}
                    label={opt.text}
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
          <Button size="small" onClick={() => setShowAnswer(true)}>
            Check answer
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
