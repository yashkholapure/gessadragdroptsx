import React, { useState } from 'react'
import '../style/SingleCorrectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faCopy, faAdd } from "@fortawesome/free-solid-svg-icons";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

interface MultipleChoiceData {
  id: string;
  question: string;
  options: Option[];
  questionType: string;
}

interface MultipleChoiceCardProps {
  id: any;
 // DataHandler: (data: MultipleChoiceData) => void;
   DataHandler: (MultipleChoiceData:any) => void;
}

const MultipleChoiceCard: React.FC<MultipleChoiceCardProps> = ({ id, DataHandler }) => {
  const [question, setQuestion] = useState<string>(''); // State for the question text
  const [options, setOptions] = useState<Option[]>([{ id: 1, text: '', isCorrect: false }]); // State for the options array

  // Event handler for changing the question text
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
    console.log(event.target.value)
  };

  // Event handler for changing an option text
  const handleOptionTextChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], text: event.target.value };
    setOptions(newOptions);
    console.log(options, "fff")
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
    setOptions([...options, { id: options.length + 1, text: '', isCorrect: false }]);
  };

  // Event handler for deleting an option
  const handleDeleteOption = (index: number) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };


  const handleAllData = () => {
    const allData: MultipleChoiceData = {
      id: `multiple_${id}`,
      question: question,
      options: options,
      questionType: "multipleChoice"
    }
    console.log(allData, "hai mcq")
    DataHandler(allData)

  }


  return (
    <>
     <div style={{ position: 'relative' }}>
             <div className="question-editor">
      <input
        type="text"
        className='textQuestion'
        placeholder="Enter question here"
        value={question}
        onChange={handleQuestionChange}
      />
      {options.map((option, index) => (
        <div key={index} className="option-container">
          <input
            type="text"
            // placeholder={`Option ${index + 1}`}
             value={option.text}
             onChange={(event) => handleOptionTextChange(event, index)}
          />
          <label>
            <input
              type="checkbox"
              name="correct-option"
            //   checked={option.isCorrect}
            //   onChange={() => handleOptionCorrectnessChange(index)}
            />
            
          </label>
          {/* <button type="button" 
          //onClick={() => handleDeleteOption(index)}
          >
            Delete
          </button> */}
          <IconButton aria-label="delete">
             <DeleteIcon onClick={() => handleDeleteOption(index)}/>
           </IconButton>
        </div>
      ))}
      <button type="button" 
      className='singleCorrectAddButton'
      onClick={handleAddOption}
      >
        {<FontAwesomeIcon icon={faAdd}  />} Add option
      </button>
    </div>
     
    <button
    style={{ position: 'absolute', bottom: 0, right: 0, marginRight: '27px', marginBottom:'7px', border:'none', outline:'none' }}
    onClick={handleAllData}
  >
   {<FontAwesomeIcon icon={faCheck}  />}
  </button>

    </div>


     </>
 )

 };

 export default MultipleChoiceCard;










 //import React, { useState } from 'react';

// interface Option {
// text: string;
// isCorrect: boolean;
// }

// interface MultipleChoiceCardProps {
// id: number;
// }

// const MultipleChoiceCard: React.FC<MultipleChoiceCardProps> = ({ id }) => {
// const [question, setQuestion] = useState<string>(''); // State for the question text
// const [options, setOptions] = useState<Option[]>([
// { text: '', isCorrect: false },
// ]); // State for the options array

// // Event handler for changing the question text
// const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// setQuestion(event.target.value);
// };

// // Event handler for changing an option text
// const handleOptionTextChange = (
// event: React.ChangeEvent<HTMLInputElement>,
// index: number
// ) => {
// const newOptions = [...options];
// newOptions[index] = { ...newOptions[index], text: event.target.value };
// setOptions(newOptions);
// };

// // Event handler for changing an option correctness
// const handleOptionCorrectnessChange = (index: number) => {
// const newOptions = [...options];
// newOptions[index] = { ...newOptions[index], isCorrect: true };
// newOptions.forEach((option, optionIndex) => {
// if (optionIndex !== index) {
// option.isCorrect = false;
// }
// });
// setOptions(newOptions);
// };

// // Event handler for adding a new option
// const handleAddOption = () => {
// setOptions([...options, { text: '', isCorrect: false }]);
// };

// // Event handler for deleting an option
// const handleDeleteOption = (index: number) => {
// const newOptions = [...options];
// newOptions.splice(index, 1);
// setOptions(newOptions);
// };

// return (
//     <>
         
//          <div className="question-editor">
//   <input
//     type="text"
//     placeholder="Enter question here"
//     value={question}
//     onChange={handleQuestionChange}
//   />
//   {options.map((option, index) => (
//     <div key={index} className="option-container">
//       <input
//         type="text"
//         placeholder={`Option ${index + 1}`}
//         value={option.text}
//         onChange={(event) => handleOptionTextChange(event, index)}
//       />
//       <label>
//         <input
//           type="checkbox"
//           name="correct-option"
//           checked={option.isCorrect}
//           onChange={() => handleOptionCorrectnessChange(index)}
//         />
//         Correct
//       </label>
//       <button type="button" onClick={() => handleDeleteOption(index)}>
//         Delete
//       </button>
//     </div>
//   ))}
//   <button type="button" onClick={handleAddOption}>
//     Add Option
//   </button>
// </div>

//     </>
// )

// };

// export default MultipleChoiceCard;