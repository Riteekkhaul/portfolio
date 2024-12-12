import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import TempNav from './Components/TempNav';
import Certifications from './Components/Certifications';
import About from './Components/About'


const HomePage = () => {

  return (
    <div >
       <TempNav />
       <Header />
       <About />
       <Skills />
       <Experience />
       <Certifications />
       <Services />
       <Projects />
       <Contact />
       <Footer />  
    </div>
  )
}

export default HomePage