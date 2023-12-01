// App.js
import React from 'react';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

const Apps = () => {
  return (
    <div>  
      <Header></Header>
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer></Footer>
    </div>
  );
};

export default Apps;
