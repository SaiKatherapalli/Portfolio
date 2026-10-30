import React from 'react';
import Reveal from '../Reveal';
import { EXPERIENCE } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <Reveal>
                <p className="section-eyebrow">Career</p>
                <h2 className="section-title">Professional Experience</h2>
            </Reveal>

            <div className="relative mt-12 space-y-8 border-l border-white/10 pl-8 md:pl-10">
                {EXPERIENCE.map((job, i) => (
                    <Reveal key={`${job.company}-${i}`} delay={i * 80}>
                        <div className="relative">
                            <span className="absolute -left-[2.55rem] top-7 h-3 w-3 rounded-full bg-indigo-400 ring-4 ring-[#0b0f1a] md:-left-[3.05rem]" />
                            <div className="card p-6">
                                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                                    <h3 className="text-xl font-semibold text-white">
                                        {job.role} <span className="text-indigo-300">· {job.company}</span>
                                    </h3>
                                    {job.period && (
                                        <span className="text-sm text-slate-500">{job.period}</span>
                                    )}
                                </div>
                                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-400 md:text-base">
                                    {job.points.map((p) => (
                                        <li key={p} className="flex gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-indigo-400" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {job.tags.map((t) => (
                                        <span key={t} className="chip">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Experience;
