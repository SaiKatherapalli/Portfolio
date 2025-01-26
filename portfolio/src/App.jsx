import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Education from './Education/Education';
import PE from './ProfessionalExperience/PE.Jsx';
import Projects from './Projects/Projects';
import Connect from './Connect/Connect';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="pt-16">
      <Navbar />
      <About />
      <Education/>
      <PE/>
      <Projects/>
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
