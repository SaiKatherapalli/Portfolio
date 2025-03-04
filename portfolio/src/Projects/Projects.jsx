import React from "react";
import bookstore from "../assets/images/bookstore.jpg";
import portfolio from "../assets/images/portfolio.jpg";
import restful_api from "../assets/images/restful_api.jpg";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 p-8 rounded-lg shadow-lg space-y-6 m-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
        Explore My Projects
      </h2>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full max-w-4xl">
          <div className="w-full h-56 shadow-md p-4 bg-white rounded-lg hover:scale-105 transition duration-300 flex flex-col items-center">
            <h1 className="text-blue-700 text-center text-lg md:text-lg lg:text-xl font-semibold mb-2">
              Scalable Bookstore
            </h1>
            <img
              className="w-full h-28 shadow-md border-2 rounded-md"
              src={bookstore}
            />
            <div className="flex flex-wrap justify-center gap-2 w-full mt-2">
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition duration-300 hover:bg-green-600">
                Open Project
              </button>
              <button
                className="p-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition duration-300 hover:bg-green-600"
                onClick={() =>
                  window.open(
                    "https://github.com/SaiKatherapalli/Scalable-Book-Store-Platform",
                    "_blank"
                  )
                }
              >
                View Code
              </button>
            </div>
          </div>
          <div className="w-full h-56 shadow-md p-4 bg-white rounded-lg hover:scale-105 transition duration-300 flex flex-col items-center">
            <h1 className="text-blue-700 text-center text-lg md:text-lg lg:text-xl font-semibold mb-2">
              Creating RESTful API
            </h1>
            <img
              className="w-full h-28 shadow-md border-2 rounded-md"
              src={restful_api}
            />
            <div className="flex flex-wrap justify-center gap-2 w-full mt-2">
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition duration-300 hover:bg-green-600">
                Open Project
              </button>
              <button
                className="p-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition duration-300 hover:bg-green-600"
                onClick={() =>
                  window.open(
                    "https://github.com/SaiKatherapalli/Creating_Restful_Api",
                    "_blank"
                  )
                }
              >
                View Code
              </button>
            </div>
          </div>
          <div className="w-full h-56 shadow-md p-4 bg-white hover:scale-105 transition duration-300 rounded-lg flex flex-col items-center">
            <h1 className="text-blue-700 text-center text-lg md:text-lg lg:text-xl font-semibold mb-2">
              Build Your Portfolio
            </h1>
            <img
              className="w-full h-28 shadow-md border-2 rounded-md"
              src={portfolio}
            />
            <div className="flex flex-wrap justify-center gap-2 w-full mt-2">
              <button
                className="p-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition duration-300 hover:bg-green-600"
                onClick={() =>
                  window.open(
                    "https://sai-deepak-portfolio.vercel.app/",
                    "_blank"
                  )
                }
              >
                Open Project
              </button>
              <button
                className="p-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition duration-300 hover:bg-green-600"
                onClick={() =>
                  window.open(
                    "https://github.com/SaiKatherapalli/Portfolio",
                    "_blank"
                  )
                }
              >
                View Code
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="text-white bg-green-600 hover:bg-yellow-600 transition-all duration-300 ease-in-out px-6 py-3 text-xl rounded-lg shadow-md hover:scale-105"
        onClick={() =>
          window.open(
            "https://github.com/SaiKatherapalli?tab=repositories",
            "_blank"
          )
        }
      >
        View More Project Repositories
      </button>
    </div>
  );
};

export default Projects;