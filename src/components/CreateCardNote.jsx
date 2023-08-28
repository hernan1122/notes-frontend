import React from 'react';
import '../styles/CreateCardNote.css'

function CreateCardNote() {
  return (
    <div className='CreateCardNote'>
      <input type="text" placeholder='Titulo' />
      <textarea rows={10} placeholder='Texto'></textarea>
    </div>
  );
}

export default CreateCardNote;
