import React, { useState } from 'react';
import SingleCorrectCard from './SingleCorrectCard';
import buttonVector from '../images/buttonVector.svg';

const SingleCorrectButton = (): JSX.Element => {
const [components, setComponents] = useState<JSX.Element[]>([]);

const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
e.preventDefault();
};



const handleDragStart = (ev: React.DragEvent<HTMLButtonElement>, id: string): void => {
ev.dataTransfer.setData('id', id);
};

return (
<>
<div className='btnSingleCorrect' onDragOver={(e) => { handleDragOver(e) }}>
<button className='btn' draggable onDragStart={(e) => { handleDragStart(e, 'singleCorrect') }}>
{<img src={buttonVector}></img>}&nbsp;&nbsp;&nbsp;&nbsp;Single Choice
</button>
</div>
</>
);
};

export default SingleCorrectButton;