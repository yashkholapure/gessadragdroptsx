import React, { Component, useState } from 'react';
import SingleCorrectCard from './SingleCorrectCard';
import MultipleChoiceCard from './MultipleChoiceCard';
import SingleCorrectButton from './SingleCorrectButton';
import MultipleChoiceButton from './MultipleChoiceButton';
import TextCard from './TextCard';
import TextButton from './TextButton';
import '../style/MainContainer.css';

interface Data {
  question: string;
  type: string;
  options: string[];
}

let singleCorrectCount = 0;
let multipleChoiceCount = 0;
let textCount = 0;

const MainContainer: React.FC = () => {
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [surveyName, setSurveyName] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [allData, setAllData] = useState<Data[]>([]);
  const [allFormData, setAllFormData] = useState({});

  const DataHandler = (Data: Data) => {
    setAllData((allData) => [...allData, Data]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');

    if (id === 'singleCorrect') {
      setCards([...cards, <SingleCorrectCard id={singleCorrectCount} DataHandler={DataHandler} />]);
      singleCorrectCount = singleCorrectCount + 1;
    } else if (id === 'multipleChoice') {
      setCards([...cards, <MultipleChoiceCard id={multipleChoiceCount} DataHandler={DataHandler} />]);
      multipleChoiceCount = multipleChoiceCount + 1

    } else if (id === 'text') {
      setCards([...cards, <TextCard id={TextCount} DataHandler={DataHandler} />]);
      TextCount = TextCount + 1;
    }
  };

  // for changing form sequence
  function handleDragStartNew(e: React.DragEvent<HTMLLIElement>, index: number) {
    e.dataTransfer.setData('text/plain', index.toString());
  }

  function handleDropNew(e: React.DragEvent<HTMLLIElement>, newIndex: number) {
    e.preventDefault();
    const oldIndex = parseInt(e.dataTransfer.getData('text/plain'));
    const newCards = [...cards];
    const [removedCard] = newCards.splice(oldIndex, 1); //remove

    newCards.splice(newIndex, 0, removedCard);
    setCards(newCards);
  }

  function handleDragOverNew(e: React.DragEvent<HTMLLIElement>) {
    e.preventDefault();
  }

  const surveyTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurveyName(e.target.value);
  };

  const expiry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(e.target.value);
  };

  let singleCorrectCount = 0;
  let MultipleChoiceCount = 0;
  let TextCount = 0;

  let all: { title: string; creator: string; expiry: string; form: Data[]; };

  const arrangeAll = () => {
    all = {
      title: surveyName,
      creator: "",
      expiry: expiryDate,
      form: allData
    }
  }
       
  const postData = () =>{
    //e.preventDefault()
       {arrangeAll()}
       console.log(all,"gggg")
  }

  return(
    <>   
        <div style={{ position: 'relative' }}>
        <div className='mainContainer'>
         <div className='containerOne'>
         
         </div>
         <div className='containerSecond'>
         <div className='optionTitle'>List of available question types</div>
         <hr></hr>
         <div className='btnContainer'>
         <SingleCorrectButton />
         <MultipleChoiceButton />
         <TextButton />
         {/* <button className='btn'>Text</button> */}
         </div>
         
         </div>
         <div className='containerThird'>
         <div className='surveyTitleDate'>
          <input onChange={surveyTitle}  value={surveyName} className="inputField" type="text" placeholder="Survey Title" />
          <input onChange={expiry}  value={expiryDate} className="inputField" type="date" placeholder="Second input field" />
         </div>
         <hr></hr>
         <div className='dropableContainer' onDrop={(e) => { handleDrop(e) }} onDragOver={handleDragOver}>
         <div className='dropableArea'>Dropable Area</div>
         </div>
         
         <div>
         <ul style={{ textAlign: 'center', display: 'block' }} >
              {
                cards.map((Card, index) => {
                  return <li key={index}
          draggable
          onDragStart={(e) => handleDragStartNew(e, index)}
          onDrop={(e) => handleDropNew(e, index)}
          onDragOver={(e) => handleDragOverNew(e)}>{Card}</li>
                })

              }
            </ul>
            
         </div>
         </div>
        </div>

        <button
    style={{ position: 'absolute', bottom: 0, right: 0, marginRight: '27px', marginBottom:'7px', border:'none', outline:'none' }}
    onClick={postData}
  >
   Save Form
  </button>

        </div>
    </>
  )
}

export default MainContainer;


// import React, { useState } from 'react';
// import SingleCorrectCard from './SingleCorrectCard';
// import MultipleChoiceCard from './MultipleChoiceCard';
// import SingleCorrectButton from './SingleCorrectButton';
// import MultipleChoiceButton from './MultipleChoiceButton';
//  import TextCard from './TextCard';
// import TextButton from './TextButton';
// import '../style/MainContainer.css';

// let singleCorrectCount = 0;
// let MultipleChoiceCount = 0;
// let TextCount = 0;

// const MainContainer: React.FC = () => {
//   const [cards, setCards] = useState<JSX.Element[]>([]);

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     console.log('dropped');
//     console.log(e.dataTransfer.getData('id'));

//     const id = e.dataTransfer.getData('id');

//     if (id === 'singleCorrect') {
//       console.log('singleboys');
//       setCards([...cards, <SingleCorrectCard id={singleCorrectCount} />]);
//       singleCorrectCount = singleCorrectCount + 1;
//     } else if (id === 'multipleChoice') {
//       console.log('radio :');
//       setCards([...cards, <MultipleChoiceCard id={MultipleChoiceCount} />]);
//       MultipleChoiceCount = MultipleChoiceCount + 1;
//     } 
//     else if (id === 'text') {
//       setCards([...cards, <TextCard id={TextCount} />]);
//       TextCount = TextCount + 1;
//     }
//   };

//   // for changing form sequence

//   function handleDragStartNew(e: React.DragEvent<HTMLLIElement>, index: number) {
//     //console.log(index,"yyyyyooouuuu")
//     e.dataTransfer.setData('text/plain', index.toString());
//   }

//   function handleDropNew(e: React.DragEvent<HTMLLIElement>, newIndex: number) {
//     //console.log(newIndex,"ggggoooo")
//     e.preventDefault();
//     const oldIndex = parseInt(e.dataTransfer.getData('text/plain'));
//     const newCards = [...cards];
//     const [removedCard] = newCards.splice(oldIndex, 1); //remove one card from oldindex
//     newCards.splice(newIndex, 0, removedCard); //at newindex add that removedcard
//     setCards(newCards);
//   }

//   function handleDragOverNew(e: React.DragEvent<HTMLLIElement>) {
//     e.preventDefault();
//   }

//   return (
//     <>
//       <div className='mainContainer'>
//         <div className='containerOne'></div>
//         <div className='containerSecond'>
//           <div className='optionTitle'>List of available question types</div>
//           <hr></hr>
//           <div className='btnContainer'>
//             <SingleCorrectButton />
//             <MultipleChoiceButton />
//             <TextButton />
//             {/* <TextButton /> */}
//             {/* <button className='btn'>Text</button> */}
//           </div>
//         </div>
//         <div className='containerThird'>
//           <div className='surveyTitleDate'>
//             <input className='inputField' type='text' placeholder='Survey Title' />
//             <input className='inputField' type='date' placeholder='Second input field' />
//           </div>
//           <hr></hr>
//           <div className='dropableContainer' onDrop={(e) => handleDrop(e)} onDragOver={handleDragOver}>
//             <div className='dropableArea'>Dropable Area</div>
//           </div>

//           <div>
//             <ul style={{ textAlign: 'center', display: 'block' }}>
//             {
//                 cards.map((Card, index) => {
//                   return <li key={index}
//           draggable
//           onDragStart={(e) => handleDragStartNew(e, index)}
//           onDrop={(e) => handleDropNew(e, index)}
//           onDragOver={(e) => handleDragOverNew(e)}>{Card}</li>
//                 })

//               }
//             </ul>
            
//          </div>
//          </div>
//         </div>
//     </>
//   )
// }

// export default MainContainer;