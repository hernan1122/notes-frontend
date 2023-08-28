import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/Head';
import Types from '../components/Types';
import Notes from '../components/Notes';
import CreateButton from '../components/CreateButton';
import '../styles/Home.css'

function Home() {
  return (
    <div className='Home'>
      <div className='Home-content'>
        <Head />
        <Types />
      </div>
      <Notes />
      <CreateButton />

      <Link to={'/'}>Atras</Link>
    </div>
  );
}

export default Home;
