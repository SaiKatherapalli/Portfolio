import React from 'react';

function About() {
    return (
        <div id="about" className="border bg-white flex flex-col items-center space-y-6 m-2 mb-4 rounded-lg shadow-md p-8 animate-slideIn shadow-slate-600">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 p-4 text-center hover:scale-105 transition duration-300">
                I'm Sai Deepak Kumar Reddy Katherapalli
            </h1>
            <img
                className="w-48 h-48 lg:w-60 lg:h-60 rounded-full object-cover shadow-md border-2 border-blue-600 animate-slideIn"
                src="Public/Images/Dp.JPG"
                alt="Sai Deepak"
            />
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 text-center animate-slideIn">
                Passionate Software Developer
            </p>

            <p className="text-sm md:text-lg lg:text-xl text-gray-700 text-center leading-relaxed max-w-4xl animate-slideIn">
                Crafting scalable, user-focused solutions with expertise in Python, Java, React.js, AWS, and Docker.
                I thrive in Agile environments, tackling challenges and building exceptional software.
            </p>

        </div>
    );
}

export default About;
