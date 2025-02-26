import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Connect = () => {
    return (
        <div id="connect" className="bg-white flex flex-col spcace-x-2 m-2 mt-4 mb-4 rounded-lg shadow-md p-4 animate-slideIn border-2 shadow-slate-600 ">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-500 text-center mb-6">
                Get Connected
            </h2>
            <p className='text-center text-blue-600 mb-6 text-lg md:text-xl lg:text-2xl flex justify-center items-center'>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                kdeepakreddy1@gmail.com
            </p>
            <div className="flex justify-center space-x-6 mb-6 animate-slideIn">
                <a href="https://www.linkedin.com/in/saideepakkumarreddy/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-4xl hover:text-blue-800 transition-colors duration-300" />
                </a>
                <a href="https://github.com/SaiKatherapalli" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-gray-900 text-4xl hover:text-gray-700 transition-colors duration-300" />
                </a>
                <a href="https://www.instagram.com/saideepak11_?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-4xl hover:text-pink-700 transition-colors duration-300" />
                </a>
            </div>

            <p className="text-md md:text-lg lg:text-xl text-blue-600 animate-slidein text-center">
                Whether you're looking to collaborate, network, or discuss innovative ideas, I'd love to connect and create something extraordinary together!
            </p>
        </div>
    );
}

export default Connect;
