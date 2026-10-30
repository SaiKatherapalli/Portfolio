import React from 'react';
import Reveal from '../Reveal';

const SCHOOLS = [
    {
        school: 'California State University, Fresno',
        degree: "Master's in Computer Engineering",
        period: '2022 – 2024',
        courses: ['Advanced Software Engineering', 'Advanced Computer Security', 'Fundamentals of Machine Learning'],
    },
    {
        school: 'Jawaharlal Technological University, Pulivendula',
        degree: "Bachelor's in Computer Science and Engineering",
        period: '2018 – 2022',
        courses: ['Data Structures and Algorithms', 'Database Management System', 'Object Oriented & Design Analysis'],
    },
];

const Education = () => {
    return (
        <section id="education" className="section">
            <Reveal>
                <p className="section-eyebrow">Background</p>
                <h2 className="section-title">Education</h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
                {SCHOOLS.map((s, i) => (
                    <Reveal key={s.school} delay={i * 100}>
                        <div className="card h-full p-6">
                            <span className="text-sm font-medium text-indigo-300">{s.period}</span>
                            <h3 className="mt-2 text-xl font-semibold text-white">{s.school}</h3>
                            <p className="mt-1 text-slate-400">{s.degree}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {s.courses.map((c) => (
                                    <span key={c} className="chip">{c}</span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Education;
