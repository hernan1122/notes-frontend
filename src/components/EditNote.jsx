import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EditNote.css'

function EditNote() {
  return (
    <div className='EditNote'>
      <div className='EditNote-container'>
        <h2>Edita tu nota!!</h2>
        <textarea rows="14"></textarea>
        <div className='EditNote-container-buttons'>
          <button className='EditNote-button'>Guardar</button>
          <Link className='EditNote-button' to={'/home'}>Cancelar</Link>
        </div>
      </div>
    </div>
  );
}

export default EditNote;
