import React, { useState } from 'react';
import '../styles/CardNote.css'

//icons
import { BsThreeDots } from 'react-icons/bs'
import CardOptions from './CardOptions';

function CardNote() {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className='CardNote'>
      <div
        className='CardNote-container-title'
        onClick={() => setShowOptions(!showOptions)}
      >
        <h4>Titulo</h4>
        <BsThreeDots className='CardNote-icon' />
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos harum dolorum deleniti pariatur consequuntur at, cumque.</p>
      <CardOptions show={showOptions} />
    </div>
  );
}

export default CardNote;
