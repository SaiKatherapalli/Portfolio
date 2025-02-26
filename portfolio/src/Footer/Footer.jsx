import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer className='bg-white w-full bottom-0 flex justify-between items-center p-4 border-t border-gray-300'>
            <div className='flex flex-col text-blue-600'>
                <p>Seattle, WA</p>
                <p>United States</p>
            </div>
            <div className='flex space-x-4 text-blue-600'>
                <a href="https://www.linkedin.com/in/saideepakkumarreddy/" target="_blank" rel="noopener noreferrer" className='hover:underline'> <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-4xl hover:text-blue-800 transition-colors duration-300" /></a>
                <a href="https://github.com/SaiDeepakKumarReddy" target="_blank" rel="noopener noreferrer" className='hover:underline'><FontAwesomeIcon icon={faGithub} className="text-gray-900 text-4xl hover:text-gray-700 transition-colors duration-300" /></a>
                <a href="https://www.instagram.com/saideepak11_?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className='hover:underline'><FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-4xl hover:text-pink-700 transition-colors duration-300" /></a>
            </div>
        </footer>
    );
};  

export default Footer;
