import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/Head';
import Types from '../components/Types';
import Notes from '../components/Notes';
import CreateButton from '../components/CreateButton';
import Camera from '../camera';
import '../styles/Home.css'

function Home() {
  const [facingMode, setFacingMode] = useState('environment')

  return (
    <div className='Home'>
      <div className='Home-content'>
        <Head />
        <Types />
      </div>
      <Notes />
      <CreateButton />
      <Camera facingMode={facingMode} setFacingMode={setFacingMode} />

      <Link to={'/'}>Atras</Link>
    </div>
  );
}

export default Home;
