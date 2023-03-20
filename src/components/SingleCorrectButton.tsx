import React, { useState } from 'react';
import SingleCorrectCard from './SingleCorrectCard';

const SingleCorrectButton = (): JSX.Element => {
const [components, setComponents] = useState<JSX.Element[]>([]);

const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
e.preventDefault();
};

// const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
// const id = e.dataTransfer.getData('id');
// if (id === 'singleCorrect') {
// setComponents([...components, <SingleCorrectCard />]);
// }
// };

const handleDragStart = (ev: React.DragEvent<HTMLButtonElement>, id: string): void => {
ev.dataTransfer.setData('id', id);
};

return (
<>
<div className='btnSingleCorrect' onDragOver={(e) => { handleDragOver(e) }}>
<button className='btn' draggable onDragStart={(e) => { handleDragStart(e, 'singleCorrect') }}>
Single Choice
</button>
</div>
</>
);
};

export default SingleCorrectButton;