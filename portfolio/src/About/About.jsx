import React from 'react';
import Reveal from '../Reveal';

function About() {
    return (
        <section id="about" className="px-4 py-4 md:px-6">
            {/* on desktop the hero fills exactly one screen below the navbar */}
            <div className="liquid-light mx-auto flex max-w-[1400px] items-center rounded-[2rem] px-6 py-12 md:px-12 lg:h-[calc(100svh-8rem)] lg:min-h-[540px] lg:py-6">
                <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                    {/* words */}
                    <div className="text-center lg:text-left">
                        <Reveal>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Hello, I'm</p>
                        </Reveal>
                        <Reveal delay={100}>
                            <h1 className="mt-4 text-4xl font-semibold leading-[1.06] tracking-tight text-gray-900 md:text-5xl xl:text-6xl">
                                Sai Deepak Kumar Reddy Katherapalli
                            </h1>
                        </Reveal>
                        <Reveal delay={200}>
                            <p className="mt-5 text-xl font-semibold text-blue-700 md:text-2xl">
                                Software Developer | Aspiring AI/ML Engineer
                            </p>
                        </Reveal>
                        <Reveal delay={300}>
                            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                                Building intelligent, production-ready software with Python, LLMs, RAG, LangChain and LangGraph,
                                backed by full-stack experience in React.js, Go, AWS, and Docker.
                                I thrive in Agile environments, turning AI ideas into reliable products.
                            </p>
                        </Reveal>
                        <Reveal delay={400}>
                            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                                <a href="#projects" className="btn-blue px-6 py-2.5 text-base md:text-lg">
                                    View My Work
                                </a>
                                <a href="#connect" className="chip-glass rounded-full px-6 py-2.5 text-base font-medium md:text-lg">
                                    Get in touch
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* photo, with glass cards floating over it */}
                    <Reveal delay={200}>
                        <div className="relative mx-auto w-full max-w-[16rem] lg:w-fit lg:max-w-none">
                            <img
                                className="mx-auto aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-2xl shadow-blue-900/25 lg:h-[min(46svh,380px)] lg:w-auto"
                                src="/Images/DP.jpeg"
                                alt="Sai Deepak"
                            />
                            <div className="liquid-photo animate-bob absolute -left-6 bottom-14 rounded-xl px-3 py-1.5 md:-left-8">
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">Now</p>
                                <p className="text-sm font-semibold">T-Mobile · AI/ML</p>
                            </div>
                            <div className="liquid-photo animate-bob absolute -right-6 bottom-4 rounded-xl px-3 py-1.5 md:-right-8" style={{ animationDelay: '-3s' }}>
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">Education</p>
                                <p className="text-sm font-semibold">M.S. · Fresno State</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default About;
