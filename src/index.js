import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css';
import './styles/variable.css'
import App from '../src/pages/Home/App';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Home from './components/Home';
import Error from './pages/erreur';
import './i18n.js';
import { initI18n } from './i18n.js';
import Project from './components/Project';

initI18n('en');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<App page={<Home />} />} />
          <Route path="/home" element={<App page={<Home />} />} />
          <Route path="/resume" element={<App page={<Resume />} />} />
          <Route path="/work" element={<App page={<Work />} />} />
          <Route path="/work/:id" element={<App page={<Project />} />} />
          <Route path='/contact' element={<App page={<Contact />} />} />
          <Route path='/*' element={<App page={<Error />} />} />
          <Route path='/error' element={<App page={<Error />} />} />
        </Routes>
      </Router>
  </React.StrictMode>
);

