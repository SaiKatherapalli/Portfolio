import React from 'react';
import Dp from '../assets/images/Dp.jpg';
import { RESUME_URL } from '../data';

const SKILLS = ['Python', 'Java', 'Go', 'React.js', 'AWS', 'Docker', 'PostgreSQL', 'Node.js'];

function About() {
    return (
        <section id="about" className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-5 pb-16 pt-28">
            <div className="grid w-full items-center gap-12 md:grid-cols-[1.4fr_1fr]">
                <div className="animate-slideIn text-center md:text-left">
                    <p className="section-eyebrow">Software Developer</p>
                    <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                        Hi, I'm <span className="gradient-text">Sai Deepak Kumar Reddy</span> Katherapalli.
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
                        I craft scalable, user-focused software with Python, Java, React.js, AWS and Docker.
                        I thrive in Agile teams, tackle hard problems, and ship polished products.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                            Resume
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-2 md:justify-start">
                        {SKILLS.map((s) => (
                            <span key={s} className="chip">{s}</span>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-cyan-300 opacity-70 blur-xl" />
                        <img
                            className="relative h-56 w-56 rounded-full border border-white/20 object-cover md:h-72 md:w-72"
                            src={Dp}
                            alt="Sai Deepak"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
