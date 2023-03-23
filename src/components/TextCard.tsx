import React, { useState } from 'react';
import '../style/SingleCorrectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faCopy, faAdd } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: number;
  //DataHandler: (allData: AllData) => void;
  DataHandler: (allData:any) => void;
}

interface AllData {
  id: string;
  question: string;
  questionType: string;
}

const TextCard: React.FC<Props> = ({ id, DataHandler }) => {
  const [question, setQuestion] = useState<string>(''); // State for the question text

  // Event handler for changing the question text
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
    console.log(event.target.value,"dddd")
  };


  const onSave = () =>{
    const allData: AllData = {
      id: `text_${id}`,
      question: question,
      questionType: "text"
   }
    console.log(allData,"hai mcq")
    DataHandler(allData)

  }

  return (
    <>
    
    <div style={{ position: 'relative' }}>
    <div className="question-editor">
          <input
          className='textQuestion'
            type="text"
            placeholder="Enter question here"
            value={question}
            onChange={handleQuestionChange}
          />
          
                
          
          
        </div>
    
        <button
    style={{ position: 'absolute', bottom: 0, right: 0, marginRight: '27px', marginBottom:'7px', border:'none', outline:'none' }}
    onClick={onSave}
  >
   {<FontAwesomeIcon icon={faCheck}  />}
  </button>
    
        </div>
        
    
            </>
    
  );
}

export default TextCard;
