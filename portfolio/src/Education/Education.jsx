import React, { Component } from 'react'

const Education = () => {
    return (
        <div id="education" className='mb-4 mt-3 m-2 p-4 shadow-md rounded-lg shadow-slate-600 animate-slideIn border-t border-t-gray-200 bg-gradient-to-r from-blue-600 to-blue-400'>
            <h1 className='text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold'>Education</h1>
            <div className='flex flex-col justify-center animate-slideIn'>
                <div className='border border-slate-300 p-5 m-5 rounded-lg transition duration-300 shadow-md w-auto h-30 bg-gradient-to-r from-red-600 to-red-300'>
                    <h2 className='text-gray-100 text-lg md:text-xl lg:text-2xl font-bold'>California State University, Fresno</h2>
                    <h3 className='text-gray-100 text-lg'>Master's In Computer Engineering</h3>
                    <h4 className='text-gray-100 text-md'>2022-2024</h4><br/>
                    <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 '>
                    <h4 className='text-blue-600 bg-gray-100 p-2 text-md rounded-lg hover:scale-105 transition duration-300'>Advanced Software Engineering</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 text-md rounded-lg hover:scale-105 transition duration-300'>Advanced Computer Security</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 text-md rounded-lg hover:scale-105 transition duration-300'>Fundamentals of Machine Learning</h4>
                    </div>
                </div>
                <div className='border border-slate-300 p-4 m-5 rounded-lg transition duration-300 shadow-md w-auto h-30 bg-gradient-to-r from-purple-600 to-purple-300'>
                    <h2 className='text-gray-100 text-lg md:text-xl lg:text-2xl font-bold'>Jawaharlal Technological University, Pulivendula</h2>
                    <h3 className='text-gray-100 text-lg'>Bachelor's In Computer Science and Engineering</h3>
                    <h4 className='text-gray-100 text-md'>2018-2022</h4> <br/>
                    <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0'>
                    <h4 className='text-blue-600 bg-gray-100 p-2 text-md rounded-lg hover:scale-105 transition duration-300'>Data Structures and Algorithms</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 text-md rounded-lg hover:scale-105 transition duration-300'>Database Management System</h4>
                    <h4 className='text-blue-600 bg-gray-100 p-2 text-md rounded-lg hover:scale-105 transition duration-300'>Object Oriented & Design Analysis</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education