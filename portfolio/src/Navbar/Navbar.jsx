import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { RESUME_URL } from '../data';

const LINKS = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'connect', label: 'Contact' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
                scrolled || isMenuOpen
                    ? 'border-b border-white/10 bg-[#0b0f1a]/80 backdrop-blur-xl'
                    : 'border-b border-transparent'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
                <a href="/" className="text-lg font-bold tracking-tight text-white">
                    Sai Deepak<span className="text-indigo-400">.</span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {LINKS.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => scrollTo(l.id)}
                            className="text-sm font-medium text-slate-400 transition hover:text-white"
                        >
                            {l.label}
                        </button>
                    ))}
                    <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-indigo-400/50 px-4 py-1.5 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-500 hover:text-white"
                    >
                        Resume
                    </a>
                </div>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-xl text-white focus:outline-none md:hidden"
                    aria-label="Toggle menu"
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
            </div>

            {isMenuOpen && (
                <div className="space-y-1 px-5 pb-4 md:hidden">
                    {LINKS.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => scrollTo(l.id)}
                            className="block w-full py-2 text-left text-slate-300 hover:text-white"
                        >
                            {l.label}
                        </button>
                    ))}
                    <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 font-semibold text-indigo-300"
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
