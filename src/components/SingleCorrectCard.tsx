import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faCopy, faAdd } from '@fortawesome/free-solid-svg-icons';

import DeleteIcon from '@mui/icons-material/Delete';
import '../style/SingleCorrectCard.css';

import AddIcon from '@mui/icons-material/Add';

type Option = {
  id: number;
  text: string;
  isCorrect: boolean;
};

type Props = {
  id: any;
  DataHandler: (allData: any) => void;
};

const SingleCorrectCard: React.FC<Props> = ({ id, DataHandler }) => {
  const [question, setQuestion] = useState<string>(''); // State for the question text
  const [options, setOptions] = useState<Option[]>([
    { id: 1, text: '', isCorrect: false },
  ]); // State for the options array

  // Event handler for changing the question text
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
    console.log(event.target.value, 'yyy');
  };

  // Event handler for changing an option text
  const handleOptionTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], text: event.target.value };
    setOptions(newOptions);
    console.log(options, 'ggg');
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
    const allData = {
      id: `radio_${id}`,
      question: question,
      options: options,
      questionType: 'radio',
    };
    console.log(allData, 'hai');
    DataHandler(allData);
  };

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
              type="radio"
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
     
     // startIcon={<FontAwesomeIcon icon={faTrash} />}
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
           
);
};

 export default SingleCorrectCard;




// import React, { useState } from 'react';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import '../style/SingleCorrectCard.css';

// interface Option {
//   text: string;
//   isCorrect: boolean;
// }

// interface SingleCorrectCardProps {
//   id: any;
// }

// const SingleCorrectCard: React.FC<SingleCorrectCardProps> = ({ id }) => {
//   const [question, setQuestion] = useState<string>(''); // State for the question text
//   const [options, setOptions] = useState<Option[]>([{ text: '', isCorrect: false }]); // State for the options array

//   // Event handler for changing the question text
//   const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setQuestion(event.target.value);
//   };

//   // Event handler for changing an option text
//   const handleOptionTextChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const newOptions = [...options];
//     newOptions[index] = { ...newOptions[index], text: event.target.value };
//     setOptions(newOptions);
//   };

//   // Event handler for changing an option correctness
//   const handleOptionCorrectnessChange = (index: number) => {
//     const newOptions = [...options];
//     newOptions[index] = { ...newOptions[index], isCorrect: true };
//     newOptions.forEach((option, optionIndex) => {
//       if (optionIndex !== index) {
//         option.isCorrect = false;
//       }
//     });
//     setOptions(newOptions);
//   };

//   // Event handler for adding a new option
//   const handleAddOption = () => {
//     setOptions([...options, { text: '', isCorrect: false }]);
//   };

//   // Event handler for deleting an option
//   const handleDeleteOption = (index: number) => {
//     const newOptions = [...options];
//     newOptions.splice(index, 1);
//     setOptions(newOptions);
//   };

//   return (
//     <>
//       <div className="question-editor">
//         <input
//           type="text"
//           placeholder="Enter question here"
//           value={question}
//           onChange={handleQuestionChange}
//         />
//         {options.map((option, index) => (
//           <div key={index} className="option-container">
//             <input
//               type="text"
//               value={option.text}
//               onChange={(event) => handleOptionTextChange(event, index)}
//             />
//             <label>
//               <input
//                 type="radio"
//                 name="correct-option"
//                 checked={option.isCorrect}
//                 onChange={() => handleOptionCorrectnessChange(index)}
//               />
//               Correct
//             </label>
//             {/* <IconButton aria-label="delete" onClick={() => handleDeleteOption(index)}>
//               <DeleteIcon />
//             </IconButton> */}
//           </div>
//         ))}
//         <button type="button" onClick={handleAddOption}>
//           Add Option
//         </button>
//       </div>
//     </>
//   );
// };

// export default SingleCorrectCard;
