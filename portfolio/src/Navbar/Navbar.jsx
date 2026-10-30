import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const RESUME = 'https://drive.google.com/file/d/1PeT_I6SoyA4tab816_nbkSlC7vn6vzw1/view?usp=drive_link';

const LINKS = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Professional Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'connect', label: 'Connect' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [active, setActive] = useState('about');

    // highlight the link of the section currently in view
    useEffect(() => {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
        }, { rootMargin: '-40% 0px -55% 0px' });
        LINKS.forEach((l) => {
            const el = document.getElementById(l.id);
            if (el) io.observe(el);
        });
        return () => io.disconnect();
    }, []);

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
        <div className='fixed inset-x-0 top-3 z-50 px-3 md:px-6'>
            <nav className={`liquid-light mx-auto max-w-[1400px] ${isMenuOpen ? 'rounded-3xl' : 'rounded-full'}`}> {/* floating glass pill */}
                <div className='flex h-14 items-center justify-between px-5'>
                    <a href='/' className='whitespace-nowrap text-xl font-semibold tracking-tight text-gray-900'>
                        Sai Deepak
                    </a>

                    <div className='hidden items-center space-x-1 lg:flex'>
                        {LINKS.map((l) => (
                            <a
                                key={l.id}
                                onClick={() => Scroll(l.id)}
                                className={`cursor-pointer rounded-full px-3.5 py-1.5 text-sm transition duration-300 hover:text-blue-700 ${active === l.id ? 'chip-glass font-medium' : 'text-gray-700'}`}
                            >
                                {l.label}
                            </a>
                        ))}
                        <a className='btn-blue ml-3 px-4 py-1.5 text-sm' href={RESUME} target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>

                    <div className='flex items-center lg:hidden'>
                        <button
                            onClick={toggleMenu}
                            aria-label='Menu'
                            className='text-xl text-gray-900 focus:outline-none'
                        >
                            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className='space-y-1 border-t border-white/60 px-4 py-3 lg:hidden'>
                        {LINKS.map((l) => (
                            <a key={l.id} onClick={() => Scroll(l.id)} className={`block cursor-pointer rounded-xl px-3 py-2 ${active === l.id ? 'chip-glass font-medium' : 'text-gray-700'}`}>{l.label}</a>
                        ))}
                        <a className='block rounded-xl px-3 py-2 text-blue-700' href={RESUME} target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
