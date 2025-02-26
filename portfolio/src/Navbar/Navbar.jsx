import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import About from '../About/About';
import Education from '../Education/Education';
import Experience from '../Professional/Experience';
import Projects from '../Projects/Projects';
import Connect from '../Connect/Connect';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const Scroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Close mobile menu after clicking
        }
    }

    return (
        <nav className='w-full h-16 bg-white shadow-lg fixed top-0 left-0 right-0 z-10'> {/* Fixed to the top */}
            <div className='flex justify-between items-center px-4 h-full'>
                <a href='/' className='text-blue-600 text-2xl font-bold'>
                    Sai Deepak Portfolio
                </a>

                <div className='hidden md:flex space-x-6 items-center'>
                <a onClick={() => Scroll('about')} className='text-blue-600 hover:scale-105 transform duration-300 text-lg font-semibold cursor-pointer'>About</a>
                    <a onClick={() => Scroll('education')} className='text-blue-600 hover:scale-105 transform duration-300 text-lg font-semibold cursor-pointer'>Education</a>
                    <a onClick={() => Scroll('experience')} className='text-blue-600 hover:scale-105 transform duration-300 text-lg font-semibold cursor-pointer'>Professional Experience</a>
                    <a onClick={() => Scroll('projects')} className='text-blue-600 hover:scale-105 transform duration-300 text-lg font-semibold cursor-pointer'>Projects</a>
                    <a onClick={() => Scroll('connect')} className='text-blue-600 hover:scale-105 transform duration-300 text-lg font-semibold cursor-pointer'>Connect</a>
                    <a className='text-white hover:bg-green-500 transform duration-300 text-lg bg-blue-500 rounded-lg p-1 px-2' href='https://drive.google.com/file/d/10LhpLtvPON4vRbjEtgLBmQGiSSCgNvsq/view?usp=drive_link' target="_blank" rel="noopener noreferrer">Resume</a>
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
                    <a onClick={() => Scroll('about')} className='block text-blue-600 cursor-pointer'>About</a>
                    <a onClick={() => Scroll('education')} className='block text-blue-600 cursor-pointer'>Education</a>
                    <a onClick={() => Scroll('experience')} className='block text-blue-600 cursor-pointer'>Professional Experience</a>
                    <a onClick={() => Scroll('projects')} className='block text-blue-600 cursor-pointer'>Projects</a>
                    <a onClick={() => Scroll('connect')} className='block text-blue-600 cursor-pointer'>Connect</a>
                    <a className='block text-blue-600' href='https://drive.google.com/file/d/10LhpLtvPON4vRbjEtgLBmQGiSSCgNvsq/view?usp=drive_link' target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
    
            )}
        </nav>
    );
};

export default Navbar;
