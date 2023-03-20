import React, { useState } from 'react';
import '../style/SingleCorrectCard.css';



interface TextCardProps {
    id: any;
  }


const TextCard: React.FC <TextCardProps>= () => {
  const [question, setQuestion] = useState<string>(''); // State for the question text

  // Event handler for changing the question text
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
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
        {/* <button type="button" onClick={() => handleDeleteOption(index)}>Delete</button> */}
      </div>
    </>
  );
};

export default TextCard;
