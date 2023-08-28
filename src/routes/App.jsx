import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Start from '../containers/Start';
import Home from '../containers/Home';
import Signup from '../containers/Signup';
import Login from '../containers/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
