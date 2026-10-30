import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SOCIALS = [
    { href: 'https://www.linkedin.com/in/saideepakkrk/', icon: faLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com/SaiKatherapalli', icon: faGithub, label: 'GitHub' },
    { href: 'https://www.instagram.com/saideepak11_?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr', icon: faInstagram, label: 'Instagram' },
];

const Footer = () => {
    return (
        <footer className='px-4 pb-2 pt-4 md:px-6'>
            <div className='liquid-light mx-auto flex max-w-[1400px] items-center justify-between rounded-3xl px-6 py-5'>
                <div className='flex flex-col text-sm text-gray-700'>
                    <p>Seattle, WA</p>
                    <p>United States</p>
                </div>
                <div className='flex space-x-4'>
                    {SOCIALS.map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className='text-gray-700 transition duration-300 hover:-translate-y-1 hover:text-blue-700'>
                            <FontAwesomeIcon icon={s.icon} className="text-2xl" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
