import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Start.css'

function Start() {
  return (
    <div className='Start'>
      <div className='Start-rotate'></div>
      <div className='Start-container'>
        <h1>Bienvenido a <span>Ota</span></h1>
        <h3>Tu app ideal de notas.</h3>
        <div className='Start-container-btn'>
          <Link to={'/signup'} className='Start-btn'>Inscribete</Link>
          <Link to={'/login'} className='Start-btn'>Ingresa</Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
