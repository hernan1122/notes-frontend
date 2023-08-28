import React from 'react';
import CardNote from './CardNote';
import '../styles/Notes.css'

function Notes() {
  return (
    <div className='Notes'>
      <h2>Notas</h2>
      <div className='Notes-container'>
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
      </div>
    </div>
  );
}

export default Notes;
