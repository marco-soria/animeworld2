import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import  { Header } from './components/header';
import { Footer } from './components/footer';
// import Home from './components/pages/Home';
import Anime from './pages/anime';
import Store from './pages/store';
// import News from './components/pages/News';
// import Store from './components/pages/Store';
// import SignIn from './components/pages/SignIn';

const Router = () => {
  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/anime' element={<Anime></Anime>}> </Route>
          <Route path='/store' element={<Store></Store>}> </Route>
            
            
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
};

export default Router; 
