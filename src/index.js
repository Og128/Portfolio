import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import App from '../src/pages/Home/App';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App page={<Home />} />} />
        <Route path="/home" element={<App page={<Home />} />} />
        <Route path="/resume" element={<App page={<Resume />} />} />
        <Route path="/work" element={<App page={<Work />} />} />
        <Route path='/contact' element={<App page={<Contact />} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

