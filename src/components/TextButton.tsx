import React,{useState} from 'react'
//import TextCard from './TextCard';
import buttonVector from '../images/buttonVector.svg';

const TextButton = () =>{

    const [components, setComponents] = useState<JSX.Element[]>([]);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) : void =>  {
      e.preventDefault();
    }
  
    
  
    const handleDragStart = (ev: React.DragEvent<HTMLButtonElement>, id: string) : void => {
      ev.dataTransfer.setData('id', id)
    }
  

    return(
        <>
         <div className='btnSingleCorrect' onDragOver={(e) => { handleDragOver(e) }} >
         <button className='btn' draggable onDragStart={(e) => { handleDragStart(e, "text") }}>
          {<img src={buttonVector}></img>}&nbsp;&nbsp;&nbsp;&nbsp;Text</button>
         </div>
        </>
    )
}

export default TextButton;