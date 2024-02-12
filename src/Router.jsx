import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import  { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
// import Home from './components/pages/Home';
// import Anime from './components/pages/Anime';
// import News from './components/pages/News';
// import Store from './components/pages/Store';
// import SignIn from './components/pages/SignIn';

const Router = () => {
  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
           
            
            
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
};

export default Router; 
