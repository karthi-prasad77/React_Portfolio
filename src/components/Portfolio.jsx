import React from 'react'
import monster from '../assets/portfolio/monster.png'
import weather from '../assets/portfolio/weather.png'
import diabetes from '../assets/portfolio/diabetes.png'
import rest from '../assets/portfolio/rest.png'

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: monster,
            href: 'https://github.com/karthi-prasad77/React-Monsters-Rolodex'
        },
        {
            id: 2,
            src: weather,
            href: 'https://github.com/karthi-prasad77/Weather_App_ReactJs/tree/main'
        },
        {
            id: 3,
            src: diabetes,
            href: 'https://github.com/KarthiPrasad/Diabetes-Prediction-'
        },
        {
            id: 4,
            src: rest,
            href: 'https://github.com/karthi-prasad77/CRUD_Django_REST_Framework'
        },
      
    ]
    return (
        <div
          name="portfolio"
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
              </p>
              <p className="py-6">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolios.map(({ id, src, href }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      <a herf={href}>Code</a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    

export default Portfolio
