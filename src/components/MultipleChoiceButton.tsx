import React, { useState } from 'react';
import SingleCorrectCard from './SingleCorrectCard';
import MultipleChoiceCard from './MultipleChoiceCard';
import buttonVector from '../images/buttonVector.svg';

const MultipleChoiceButton = (): JSX.Element => {
  const [components, setComponents] = useState<JSX.Element[]>([]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };



  const handleDragStart = (ev: React.DragEvent<HTMLButtonElement>, id: string): void => {
    ev.dataTransfer.setData('id', id);
  };

  return (
    <>
      <div className="btnMultipleChoice" onDragOver={handleDragOver} >
        <button className="btn" draggable onDragStart={(e) => handleDragStart(e, 'multipleChoice')}>
        {<img src={buttonVector}></img>}&nbsp;&nbsp;&nbsp;&nbsp;Multiple Choice
        </button>
      </div>
    </>
  );
};

export default MultipleChoiceButton;
