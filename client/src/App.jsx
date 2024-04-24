import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';





function App () {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/header' element={<Header/>}/>
       <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
