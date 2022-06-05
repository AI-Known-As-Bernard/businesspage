import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import About from './pages/About'
import Services from './pages/Services'
import Support from './pages/Support'
import Contact from './pages/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App/> }/>
      <Route path="/about" element={ <About/> }/>
      <Route path="/services" element={ <Services/> }/>
      <Route path="/support" element={ <Support/> }/>
      <Route path="/contact" element={ <Contact/> }/>
    </Routes>
  </BrowserRouter>
);


