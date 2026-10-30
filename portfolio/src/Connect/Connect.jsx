import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Reveal from '../Reveal';

const SOCIALS = [
    { href: 'https://www.linkedin.com/in/saideepakkrk/', icon: faLinkedin, label: 'LinkedIn', color: 'text-blue-600' },
    { href: 'https://github.com/SaiKatherapalli', icon: faGithub, label: 'GitHub', color: 'text-gray-900' },
    { href: 'https://www.instagram.com/saideepak11_?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr', icon: faInstagram, label: 'Instagram', color: 'text-pink-500' },
];

const Connect = () => {
    return (
        <section id="connect" className="px-4 py-4 md:px-6">
            <div className="liquid-light mx-auto max-w-6xl rounded-[2rem] px-5 py-14 text-center md:py-20">
                <div className="mx-auto flex max-w-3xl flex-col items-center">
                    <Reveal>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Get in touch</p>
                    </Reveal>
                    <Reveal delay={100}>
                        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">Let's build something together</h1>
                    </Reveal>
                    <Reveal delay={200}>
                        <p className="mt-5 text-base text-gray-700 md:text-xl">
                            Whether you're looking to collaborate, network, or discuss innovative ideas, I'd love to connect and create something extraordinary together!
                        </p>
                    </Reveal>

                    <Reveal delay={300}>
                        <a
                            href="mailto:saideepakkatherapalli@gmail.com"
                            className="btn-blue mt-9 inline-flex items-center gap-3 px-7 py-3 text-lg"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                            saideepakkatherapalli@gmail.com
                        </a>
                    </Reveal>

                    <Reveal delay={400}>
                        <div className="mt-9 flex justify-center gap-5">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="chip-glass flex h-14 w-14 items-center justify-center rounded-full"
                                >
                                    <FontAwesomeIcon icon={s.icon} className={`${s.color} text-3xl`} />
                                </a>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default Connect;
