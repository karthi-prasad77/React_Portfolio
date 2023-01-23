import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactjs from '../assets/react.png'
import nodejs from '../assets/node.png'
import python from '../assets/python.png'
import tensor from '../assets/Tensorflow.png'
import torch from '../assets/test.png'
import django from '../assets/Django.jpg'



const Experience = () => {
    const techStack = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactjs,
            title: 'React Js',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: nodejs,
            title: 'Node Js',
            style: 'shadow-green-400'
        },
        {
            id: 6,
            src: python,
            title: 'Python',
            style: 'shadow-blue-800'
        },
        {
            id: 7,
            src: tensor,
            title: 'TensorFlow',
            style: 'shadow-orange-500'
        },
        {
            id: 8,
            src: torch,
            title: 'Pytorch',
            style: 'shadow-red-500'
        },
        {
            id: 9,
            src: django,
            title: 'Django',
            style: 'shadow-green-500'
        }
    ]
    return (
        <div
          name="experience"
          className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Experience
              </p>
              <p className="py-6">These are the technologies I've worked with</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {techStack.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Experience