import React from 'react';
import Singin from './components/Sign-Register/Signin.js';
import LandingPage from './components/Home-Myvidoes/Landingpage.js';
import Register from './components/Sign-Register/Register.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Router() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign" element={<Singin />} />
        <Route path="/register" element={<Register />} />
       
      </Routes>
    </BrowserRouter>
  </>);

}
export default Router;