import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Reveal from '../Reveal';

const SOCIALS = [
    { icon: faLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/saideepakkumarreddy/' },
    { icon: faGithub, label: 'GitHub', href: 'https://github.com/SaiDeepakKumarReddy' },
    { icon: faInstagram, label: 'Instagram', href: 'https://www.instagram.com/saideepak11_?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr' },
];

const Connect = () => {
    return (
        <section id="connect" className="section text-center">
            <Reveal>
                <p className="section-eyebrow">Contact</p>
                <h2 className="section-title">Let's build something great</h2>
                <p className="mx-auto mt-4 max-w-xl text-slate-400">
                    Whether you're looking to collaborate, network, or discuss ideas, I'd love to connect.
                </p>
                <a href="mailto:kdeepakreddy1@gmail.com" className="btn-primary mt-8">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    kdeepakreddy1@gmail.com
                </a>
                <div className="mt-8 flex justify-center gap-4">
                    {SOCIALS.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:text-white"
                        >
                            <FontAwesomeIcon icon={s.icon} />
                        </a>
                    ))}
                </div>
            </Reveal>
        </section>
    );
};

export default Connect;
