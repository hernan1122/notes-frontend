import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppProvider from '../context/Context';
import Start from '../containers/Start';
import Home from '../containers/Home';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import EditNote from '../components/EditNote';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/edit-note' element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
