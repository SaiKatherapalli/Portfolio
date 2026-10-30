import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Reveal from '../Reveal'

// Latest first: Master's on top, B.Tech below (arrow points up the journey).
const JOURNEY = [
    {
        level: "Master's Degree",
        school: 'California State University, Fresno',
        degree: 'Computer Engineering',
        start: '2023',
        end: '2024',
        courses: ['Advanced Software Engineering', 'Advanced Computer Security', 'Fundamentals of Machine Learning'],
    },
    {
        level: "Bachelor's Degree",
        school: 'Jawaharlal Technological University, Pulivendula',
        degree: 'Computer Science and Engineering',
        start: '2018',
        end: '2022',
        courses: ['Data Structures and Algorithms', 'Database Management System', 'Object Oriented & Design Analysis'],
    },
]

const Education = () => {
    return (
        <section id="education" className="px-4 py-4 md:px-6">
            <div className="liquid-light mx-auto max-w-6xl rounded-[2rem] px-5 py-12 md:px-10 md:py-16">
                <Reveal>
                    <p className="mb-14 text-center text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">My journey</p>
                </Reveal>

                <div className="w-full">
                    {JOURNEY.map((s, i) => {
                        const last = i === JOURNEY.length - 1
                        return (
                            <Reveal key={s.school} delay={i * 120}>
                                <div className={`relative grid grid-cols-[3.5rem_1fr] md:grid-cols-[12rem_4rem_1fr] ${last ? '' : 'mb-12'}`}>
                                    {/* years (desktop) */}
                                    <div className="hidden pt-5 pr-2 text-right md:block">
                                        <p className="text-lg font-semibold tracking-tight text-gray-900 lg:text-xl">
                                            {s.start} – {s.end}
                                        </p>
                                        <p className="mt-0.5 text-xs font-medium text-gray-500">{s.level}</p>
                                    </div>

                                    {/* timeline node + line */}
                                    <div className="relative flex justify-center">
                                        {!last && (
                                            <span className="absolute left-1/2 top-[46px] -bottom-[94px] w-[3px] -translate-x-1/2 rounded-full bg-blue-300" />
                                        )}
                                        <span className="chip-glass relative z-10 mt-6 flex h-11 w-11 items-center justify-center rounded-full">
                                            <FontAwesomeIcon icon={faGraduationCap} />
                                        </span>
                                        {!last && (
                                            <span className="chip-glass absolute -bottom-[36px] left-1/2 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full">
                                                <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
                                            </span>
                                        )}
                                    </div>

                                    {/* card */}
                                    <div className="card-glass rounded-3xl p-6 md:p-8">
                                        <div className="mb-2 flex flex-wrap items-center gap-2 md:hidden">
                                            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">{s.level}</span>
                                            <span className="text-sm font-semibold text-gray-600">{s.start} – {s.end}</span>
                                        </div>

                                        <h2 className="text-xl font-semibold leading-snug tracking-tight text-gray-900 lg:text-2xl">{s.school}</h2>
                                        <h3 className="mt-1 text-base text-gray-600 md:text-lg">{s.degree}</h3>

                                        <div className="mt-5 flex flex-wrap gap-3">
                                            {s.courses.map((c) => (
                                                <span key={c} className="chip-glass rounded-full px-4 py-2 text-sm md:text-base">
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Education
