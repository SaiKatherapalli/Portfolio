import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import About from '../About/About';
import Education from '../Education/Education';
import PE from '../ProfessionalExperience/PE.Jsx';
import Projects from '../Projects/Projects';
import Connect from '../Connect/Connect';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='w-full h-16 bg-white shadow-lg fixed top-0 left-0 right-0 z-10'> {/* Fixed to the top */}
            <div className='flex justify-between items-center px-4 h-full'>
                <a href='/' className='text-blue-600 text-2xl font-bold'>
                    Sai Deepak Portfolio
                </a>

                <div className='hidden md:flex space-x-6 items-center'>
                    <a className='text-blue-600 hover:scale-105 transform duration-300 text-lg font-semibold' href="/About">About</a>
                    <a className='text-blue-600 hover:scale-105 transform duration-300 text-lg font-semibold' href="/Educatiom">Education</a>
                    <a className='text-blue-600 hover:scale-105 transform duration-300 text-lg font-semibold' href='/Professional Experience'>Professional Experience</a>
                    <a className='text-blue-600 hover:scale-105 transform duration-300 text-lg font-semibold' href='/Projects'>Projects</a>
                    <a className='text-blue-600 hover:scale-105 transform duration-300 text-lg font-semibold' href='/Connect'>Connect</a>
                    <a className='text-white hover:bg-green-500 transform duration-300 text-lg bg-blue-500 rounded-lg p-1 px-2' href='https://drive.google.com/file/d/1aMg3tmxVF1ORWV62aOZXzmT7ZmgGCX5n/view?usp=drive_link' target="_blank" rel="noopener noreferrer">Resume</a>
                </div>

                <div className='md:hidden flex items-center'>
                    <button
                        onClick={toggleMenu}
                        className='text-black text-xl focus:outline-none'
                    >
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className='md:hidden bg-white px-4 py-3 space-y-4'>
                    <a className='block text-blue-600'>About</a>
                    <a className='block text-blue-600'>Education</a>
                    <a className='block text-blue-600'>Professional Experience</a>
                    <a className='block text-blue-600'>Projects</a>
                    <a className='block text-blue-600'>Connect</a>
                    <a className='block text-blue-600' href='https://drive.google.com/file/d/1aMg3tmxVF1ORWV62aOZXzmT7ZmgGCX5n/view?usp=drive_link'>Resume</a>
                </div>
            )}
        </nav>      
    );
};

export default Navbar;
