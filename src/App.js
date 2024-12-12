import React from 'react';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import HomePage from './HomePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage' ;
import ExperiencePage from './pages/ExperiencePage'; 
import SkillsPage from './pages/SkillsPage';
import ProjectPage from './pages/ProjectPage';
import TempPage from './TempPage';

const App = () => {
  return (
    <div className='App' >
      <Routes>
        <Route path='/pract' element={<TempPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App;

