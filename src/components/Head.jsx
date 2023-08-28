import React from 'react';
import '../styles/Head.css'

//images and icons
import perfil from '../images/fotoperfil.jpg'
import { BiSearch } from 'react-icons/bi'

function Head() {
  return (
    <div className='Head'>
      <div className='Head-content-user'>
        <img src={perfil} alt="" />
        <h1>Hola Axel</h1>
      </div>
      <div className='Head-content-input'>
        <BiSearch className='Head-icon' />
        <input type="text" placeholder='Busca tu nota...' />
      </div>
    </div>
  );
}

export default Head;
