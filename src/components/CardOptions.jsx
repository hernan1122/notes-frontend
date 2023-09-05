import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CardOptions.css'

//icons
import { AiOutlineEdit } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai'

function CardOptions({ show }) {

  return (
    <div className={`CardOptions ${show ? 'show' : ''}`}>
      <Link className='CardOptions-content' to={'/edit-note'} >
        <AiOutlineEdit className='CardOptions-icon' />
        <p>Editar</p>
      </Link>
      <div className='CardOptions-content'>
        <AiOutlineDelete className='CardOptions-icon' />
        <p>Eliminar</p>
      </div>
    </div>
  );
}

export default CardOptions;
