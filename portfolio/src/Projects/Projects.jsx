import React from 'react'
import Reveal from '../Reveal'

const Projects = () => {
    return (
        <section id="projects" className="px-3 py-2 md:px-6 md:py-4">
            <div className="liquid-light mx-auto max-w-[1400px] rounded-[2rem] px-4 py-8 md:px-10 md:py-16">
                <Reveal>
                    <p className="mb-8 text-center md:mb-14 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">What I've built</p>
                </Reveal>

                <Reveal delay={100}>
                    <div className="card-glass mx-auto w-fit max-w-full space-y-4 rounded-3xl p-4 md:p-8">
                        <h3 className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
                            Resume Tailor <span className="font-normal text-lg text-gray-600">| AI / Full Stack</span>
                        </h3>
                        <img
                            src="/Images/resume_tailor.png"
                            alt="Resume Tailor"
                            className="h-auto w-[300px] max-w-full rounded-2xl border border-white shadow-lg"
                        />
                        <div className="flex flex-wrap gap-3 pt-2">
                            <a
                                href="https://resumetailor-pro.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-blue px-5 py-2"
                            >
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/SaiKatherapalli/resume-tailor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="chip-glass rounded-full px-5 py-2 font-medium"
                            >
                                Source Code
                            </a>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <div className="mt-6 flex justify-center md:mt-10">
                        <button
                            className="btn-blue px-7 py-3 text-lg"
                            onClick={() =>
                                window.open(
                                    'https://github.com/SaiKatherapalli?tab=repositories',
                                    '_blank'
                                )
                            }
                        >
                            View Project Repositories
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
export default Projects
