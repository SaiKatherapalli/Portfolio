import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Education from './Education/Education';
import Experience from './Professional/Experience';
import Projects from './Projects/Projects';
import Connect from './Connect/Connect';
import Footer from './Footer/Footer';
import Background from './Background';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [progress, setProgress] = useState(0);

  // thin reading-progress line at the top edge
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Background />
      <div className="relative z-10 pb-6 pt-24 text-gray-900">
        <div
          aria-hidden="true"
          className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-blue-600"
          style={{ transform: `scaleX(${progress})` }}
        />
        <Navbar />
        <About />
        <Education/>
        <Experience/>
        <Projects/>
        <Connect />
        <Footer />
        <Analytics/>
      </div>
    </>
  );
}

export default App;
