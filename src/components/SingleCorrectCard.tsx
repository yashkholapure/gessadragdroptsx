import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import '../style/SingleCorrectCard.css';

interface Option {
  text: string;
  isCorrect: boolean;
}

interface SingleCorrectCardProps {
  id: any;
}

const SingleCorrectCard: React.FC<SingleCorrectCardProps> = ({ id }) => {
  const [question, setQuestion] = useState<string>(''); // State for the question text
  const [options, setOptions] = useState<Option[]>([{ text: '', isCorrect: false }]); // State for the options array

  // Event handler for changing the question text
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  // Event handler for changing an option text
  const handleOptionTextChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], text: event.target.value };
    setOptions(newOptions);
  };

  // Event handler for changing an option correctness
  const handleOptionCorrectnessChange = (index: number) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], isCorrect: true };
    newOptions.forEach((option, optionIndex) => {
      if (optionIndex !== index) {
        option.isCorrect = false;
      }
    });
    setOptions(newOptions);
  };

  // Event handler for adding a new option
  const handleAddOption = () => {
    setOptions([...options, { text: '', isCorrect: false }]);
  };

  // Event handler for deleting an option
  const handleDeleteOption = (index: number) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  return (
    <>
      <div className="question-editor">
        <input
          type="text"
          placeholder="Enter question here"
          value={question}
          onChange={handleQuestionChange}
        />
        {options.map((option, index) => (
          <div key={index} className="option-container">
            <input
              type="text"
              value={option.text}
              onChange={(event) => handleOptionTextChange(event, index)}
            />
            <label>
              <input
                type="radio"
                name="correct-option"
                checked={option.isCorrect}
                onChange={() => handleOptionCorrectnessChange(index)}
              />
              Correct
            </label>
            {/* <IconButton aria-label="delete" onClick={() => handleDeleteOption(index)}>
              <DeleteIcon />
            </IconButton> */}
          </div>
        ))}
        <button type="button" onClick={handleAddOption}>
          Add Option
        </button>
      </div>
    </>
  );
};

export default SingleCorrectCard;
