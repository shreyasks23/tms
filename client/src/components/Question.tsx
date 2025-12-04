import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import type { IQuestion } from "../models/Question";

export const Question = (props: IQuestion) => {
  return (
    <div key={props._id}>
      <div>{props.text}</div>
      <FormControl>
        <RadioGroup>
          {props.options.map((opt, index) => {
            return (
              <FormControlLabel
                value={opt}
                control={<Radio />}
                label={opt}
                key={index}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <div>{props.description ?? null}</div>
    </div>
  );
};
