import React, { useState } from 'react';

interface Option {
text: string;
isCorrect: boolean;
}

interface MultipleChoiceCardProps {
id: number;
}

const MultipleChoiceCard: React.FC<MultipleChoiceCardProps> = ({ id }) => {
const [question, setQuestion] = useState<string>(''); // State for the question text
const [options, setOptions] = useState<Option[]>([
{ text: '', isCorrect: false },
]); // State for the options array

// Event handler for changing the question text
const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setQuestion(event.target.value);
};

// Event handler for changing an option text
const handleOptionTextChange = (
event: React.ChangeEvent<HTMLInputElement>,
index: number
) => {
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
        placeholder={`Option ${index + 1}`}
        value={option.text}
        onChange={(event) => handleOptionTextChange(event, index)}
      />
      <label>
        <input
          type="checkbox"
          name="correct-option"
          checked={option.isCorrect}
          onChange={() => handleOptionCorrectnessChange(index)}
        />
        Correct
      </label>
      <button type="button" onClick={() => handleDeleteOption(index)}>
        Delete
      </button>
    </div>
  ))}
  <button type="button" onClick={handleAddOption}>
    Add Option
  </button>
</div>

    </>
)

};

export default MultipleChoiceCard;