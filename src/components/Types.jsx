import React from 'react';
import '../styles/Types.css'

//icons
import { LuAlarmClock } from 'react-icons/lu'
import { FaLightbulb } from 'react-icons/fa'
import { FaGift } from 'react-icons/fa'

function Types() {
  return (
    <div className='Types'>
      <h2>Tipos</h2>
      <div className='Types-content'>
        <div className='Types-circle-clock'>
          <LuAlarmClock className='Types-icon' />
        </div>
        <div className='Types-description'>
          <h4>Por hacer</h4>
          <p>5 tareas ahora, 1 terminada</p>
        </div>
      </div>
      <div className='Types-content'>
        <div className='Types-circle-remember'>
          <FaLightbulb className='Types-icon' />
        </div>
        <div className='Types-description'>
          <h4>Para recordar</h4>
          <p>3 notas ahora, 4 terminada</p>
        </div>
      </div>
      <div className='Types-content'>
        <div className='Types-circle-birthday'>
          <FaGift className='Types-icon' />
        </div>
        <div className='Types-description'>
          <h4>Cumpleaños</h4>
          <p>2 cumpleaños este mes</p>
        </div>
      </div>
    </div>
  );
}

export default Types;
