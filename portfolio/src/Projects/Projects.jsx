import React from 'react';
import Reveal from '../Reveal';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <Reveal>
                <div className="card relative overflow-hidden p-10 text-center md:p-14">
                    <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
                    <p className="section-eyebrow relative">Work</p>
                    <h2 className="section-title relative">Explore My Projects</h2>
                    <p className="relative mx-auto mt-4 max-w-xl text-slate-400">
                        Browse my repositories on GitHub to see the things I've built and the code behind them.
                    </p>
                    <a
                        href="https://github.com/SaiDeepakKumarReddy?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary relative mt-8"
                    >
                        View Repositories →
                    </a>
                </div>
            </Reveal>
        </section>
    );
};

export default Projects;
