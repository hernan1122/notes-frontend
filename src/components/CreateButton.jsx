import React from 'react';
import '../styles/CreateButton.css'

//icons
import { BsClipboard2Plus } from 'react-icons/bs'

function CreateButton() {
  return (
    <button className='CreateButton'>
      <BsClipboard2Plus className='CreateButton-icon' />
    </button>
  );
}

export default CreateButton;
