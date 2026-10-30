import React from 'react';

const Experience = () => {
    return (
        <div id="experience" className='mb-4 mt-3 m-2 p-8 shadow-md rounded-lg shadow-slate-600 space-y-6 animate-slideIn border-t border-t-gray-200 bg-gradient-to-r from-blue-600 to-blue-400'>
            <h1 className='text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold'>Professional Experience</h1>
            <div className='p-4 shadow-md rounded-lg shadow-slate-400 animate-slideIn border-t-gray-400 bg-blue-100'>
                <h1 className='text-xl font-bold text-blue-600'>
                    HashedTokens <span className='font-normal text-lg'>| Software Developer</span>
                </h1>
                <ul className='list-disc marker:text-blue-600 ml-5 text-justify'>
                    <li>Developed and optimized responsive UI components using React.js and Tailwind CSS, and engineered scalable backend systems with Go and PostgreSQL, achieving 99.9% uptime and boosting user engagement.</li>
                    <li>Automated workflows with Docker pipelines and AWS S3 integration, reducing deployment time by 40% and improving operational efficiency by 30%.</li>
                </ul><br />
                <div className='flex flex-wrap gap-4'>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>React Js</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Postgresql</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Go</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Aws</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Docker</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Redis</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Tailwind css</h4>
                </div>

            </div>
            <div className='p-4 shadow-md rounded-lg shadow-slate-400 animate-slideIn border-t-gray-500 bg-blue-100'>
                <h1 className='text-xl font-bold text-blue-600'>California Department of Pesticide Regulation <span className='font-normal text-lg'> | Undergraduate Research Assistant</span></h1>
                <ul className='list-disc marker:text-blue-600 ml-5 text-justify'>
                    <li>Designed and developed interactive, user-friendly dashboards in Power BI to present key insights from complex datasets, enabling stakeholders to easily understand and make data-driven decisions.</li>
                    <li>Enhanced data analysis workflows by creating automated macros in Excel, optimizing the processing of large datasets, and supporting seamless integration with Power BI visualizations for improved clarity and decision-making.</li>
                </ul><br />
                <div className='flex flex-wrap gap-4'>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Data Visualisation</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Power BI</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Excel</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Data Preprocesing</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Reports</h4>
                </div>
            </div>
            <div className='p-4 shadow-md rounded-lg shadow-slate-400 animate-slideIn bg-blue-100 '>
                <h1 className='text-xl font-bold text-blue-600'>Wipro <span className='font-normal text-lg'>| Full Stack Developer</span></h1>
                <ul className='list-disc marker:text-blue-600 ml-5 text-justify'>
                    <li>Engineered a secure e-commerce platform using the MERN stack, incorporating JWT authentication for data protection, and developed 15+ REST APIs to ensure seamless user access and robust backend functionality.</li>
                    <li>Built a responsive frontend using React.js and Redux, enhancing user experience across devices, and collaborated in an agile team to deliver scalable features on time, improving overall system performance and maintainability.</li>
                </ul><br />
                <div className='flex flex-wrap gap-4'>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Mongo dB</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Express Js</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>React Js</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Node Js</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>JWT Authentication</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Web Development</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 px-3 text-md rounded-full hover:scale-105 transition duration-300'>Javascript</h4>
                </div>
            </div>
        </div >
    );
};

export default Experience;
