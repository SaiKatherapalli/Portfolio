import React from 'react';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Education from './Education/Education';
import Experience from './Professional/Experience';
import Projects from './Projects/Projects';
import Connect from './Connect/Connect';
import Footer from './Footer/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <Experience />
        <Education />
        <Projects />
        <Connect />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
