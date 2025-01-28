import React, { Component } from 'react'
const Projects = () => {
    return (
        <div id="projects" className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 p-8 rounded-lg shadow-lg space-y-4 m-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                Explore My Projects
            </h2>
            <p className="text-lg text-white text-center">
                Click the button below to view my project repositories on GitHub and explore the work I've done.
            </p>
            <button
                className="text-white bg-green-600 hover:bg-yellow-600 transition-all duration-300 ease-in-out px-6 py-3 text-xl rounded-lg shadow-md hover:scale-105"
                onClick={() =>
                    window.open(
                        'https://github.com/SaiDeepakKumarReddy?tab=repositories',
                        '_blank'
                    )
                }
            >
                View Project Repositories
            </button>
        </div>

    )
}
export default Projects