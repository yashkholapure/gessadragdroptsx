import React, { useState } from 'react';
import SingleCorrectCard from './SingleCorrectCard';
import MultipleChoiceCard from './MultipleChoiceCard';

const MultipleChoiceButton = (): JSX.Element => {
  const [components, setComponents] = useState<JSX.Element[]>([]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
//     const id = e.dataTransfer.getData('id');

//     if (id === 'multipleChoice') {
//       setComponents([...components, <MultipleChoiceCard />]);
//     }
//   };

  const handleDragStart = (ev: React.DragEvent<HTMLButtonElement>, id: string): void => {
    ev.dataTransfer.setData('id', id);
  };

  return (
    <>
      <div className="btnMultipleChoice" onDragOver={handleDragOver} >
        <button className="btn" draggable onDragStart={(e) => handleDragStart(e, 'multipleChoice')}>
          Multiple Choice
        </button>
      </div>
    </>
  );
};

export default MultipleChoiceButton;
