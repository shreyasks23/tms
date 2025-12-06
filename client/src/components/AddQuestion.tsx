import { useState } from "react";
import type { IOption, IQuestion } from "../models/Question";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { addQuestion } from "../services/questionService";

interface AddQuestionProps {
  addQuestions: (question: IQuestion) => void;
}

export const AddQuestion = (props: AddQuestionProps) => {
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState<IOption[]>([{ _id: "1" } as IOption]);

  // Handle option text change
  const handleOptionChange = (index: number, value: string) => {
    const updated = [...options];
    updated[index].text = value;
    setOptions(updated);
  };

  // Ensure only one checkbox is checked
  const handleCorrectSelect = (index: number) => {
    const updated = options.map((opt, i) => ({
      ...opt,
      isCorrect: i === index,
    }));
    setOptions(updated);
  };

  // Add new option
  const addOption = () => {
    setOptions([...options, { text: "", isCorrect: false }]);
  };

  const handleSubmit = () => {
    const req: IQuestion = {
      text: question,
      options: options,
      description: description,
    };
    addQuestion(req).then((res) => {
      props.addQuestions(res.data);
    });
  };

  return (
    <>
      <Box
        sx={{
          p: 3,
          mb: 4,
          border: "1px solid #ddd",
          borderRadius: 2,
          bgcolor: "#fafafa",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Create Question
        </Typography>

        {/* Question Input */}
        <TextField
          fullWidth
          label="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          sx={{ mb: 3 }}
          multiline
          rows={2}
        />

        {/* Options Section */}
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Options:
        </Typography>

        {options.map((opt, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              minWidth: 500,
              gap: 2,
              mb: 2,
            }}
          >
            <Checkbox
              checked={opt.isCorrect}
              onChange={() => handleCorrectSelect(index)}
              color="primary"
            />

            <TextField
              label={`Option ${index + 1}`}
              value={opt.text}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              fullWidth
            />
            <IconButton>
              <AddIcon onClick={() => addOption()} />
            </IconButton>
          </Box>
        ))}
        {/* Question Input */}
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mb: 3 }}
          multiline
          rows={2}
        />
      </Box>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleSubmit}
      >
        Add Question
      </Button>
    </>
  );
};
