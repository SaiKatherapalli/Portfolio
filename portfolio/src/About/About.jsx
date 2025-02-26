import React from "react";
import Dp from "../assets/images/Dp.jpg";
import { FaDownload } from 'react-icons/fa';
function About() {
  return (
    <div
      id="about"
      className="border bg-white flex flex-col items-center space-y-6 m-2 mb-4 rounded-lg shadow-md p-8 animate-slideIn shadow-slate-600"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 p-4 text-center hover:scale-105 transition duration-300">
        I'm Sai Deepak Kumar Reddy Katherapalli
      </h1>
      <img
        className="w-48 h-48 lg:w-60 lg:h-60 rounded-full object-cover shadow-md border-2 border-blue-600 animate-slideIn"
        src={Dp}
        alt="Sai Deepak"
      />
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 text-center animate-slideIn">
        Passionate Software Developer
      </p>
     
      <p className="text-sm md:text-lg lg:text-xl text-gray-700 text-center leading-relaxed max-w-4xl animate-slideIn">
        Crafting scalable, user-focused solutions with expertise in Python,
        Java, React.js, AWS, and Docker. I thrive in Agile environments,
        tackling challenges and building exceptional software.
      </p>
      <a
        href="https://drive.google.com/file/d/10LhpLtvPON4vRbjEtgLBmQGiSSCgNvsq/view?usp=sharing"
        className="flex items-center space-x-2 bg-blue-500 text-white px-3 py-2 rounded-lg shadow-md text-lg font-semibold transition duration-300 hover:bg-green-500 hover:scale-105 animate-slideIn"
      >
        <span>Resume</span>
        <FaDownload className="text-md" />
      </a>
    </div>
  );
}

export default About;
