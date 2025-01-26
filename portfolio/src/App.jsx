import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Education from './Education/Education';
import Experience from './Professional/Experience';
import Projects from './Projects/Projects';
import Connect from './Connect/Connect';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="pt-16">
      <Navbar />
      <About />
      <Education/>
      <Experience/>
      <Projects/>
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
