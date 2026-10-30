import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Reveal from '../Reveal';

// Latest first.
const JOBS = [
    {
        company: 'T-Mobile',
        role: 'Software Engineer – AI/ML',
        location: 'USA',
        summary: 'Building AI-powered knowledge assistants and full-stack monitoring platforms that cut manual information retrieval time by 40%.',
        skills: ['React', 'TypeScript', 'Node.js', 'Express.js', 'OpenAI', 'LangChain', 'InfluxDB', 'Grafana', 'REST APIs', 'GitLab CI', 'Docker', 'Kubernetes'],
    },
    {
        company: 'Citi Group',
        role: 'Software Developer',
        location: 'USA',
        summary: 'Built scalable Spring Boot microservices with Kafka for high-performance financial applications, cutting API response time by 30%.',
        skills: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Apache Kafka', 'React', 'JPA / Hibernate', 'DynamoDB', 'Spring Security', 'GitLab CI', 'Docker', 'Kubernetes', 'JUnit', 'Mockito'],
    },
    {
        company: 'Wipro Private Limited',
        role: 'Associate Software Developer',
        location: 'India',
        summary: 'Developed and deployed a hospital management system that reduced patient registration time by 30% across departments.',
        skills: ['Java', 'Spring Boot', 'React.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'AWS', 'Jenkins', 'Docker', 'Kubernetes', 'JWT', 'OAuth2', 'ELK Stack'],
    },
];

const Experience = () => {
    return (
        <section id='experience' className='px-3 py-2 md:px-6 md:py-4'>
            <div className='liquid-light mx-auto max-w-[1400px] rounded-[2rem] px-4 py-8 md:px-10 md:py-16'>
                <Reveal>
                    <p className='mb-8 text-center md:mb-14 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700'>Where I've worked</p>
                </Reveal>

                <div className='space-y-4 md:space-y-6'>
                    {JOBS.map((job, i) => (
                        <Reveal key={job.company} delay={i * 120}>
                            <div className='card-glass rounded-3xl p-4 md:p-8'>
                                <div className='flex flex-col gap-2 md:flex-row md:items-start md:justify-between'>
                                    <h2 className='text-lg font-semibold leading-snug tracking-tight text-gray-900 md:text-xl lg:text-2xl'>
                                        {job.company} <span className='font-normal text-base text-gray-600 md:text-lg lg:text-xl'>| {job.role}</span>
                                    </h2>
                                    <span className='chip-glass inline-flex w-fit flex-none items-center gap-2 rounded-full px-3 py-1 text-sm font-medium'>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        {job.location}
                                    </span>
                                </div>
                                <p className='mt-2 max-w-4xl text-sm text-gray-700 md:text-lg'>{job.summary}</p>

                                <div className='mt-4 flex flex-wrap gap-2 md:mt-5 md:gap-3'>
                                    {job.skills.map((s) => (
                                        <span key={s} className='chip-glass rounded-full px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-base'>
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
