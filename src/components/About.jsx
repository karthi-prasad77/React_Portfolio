import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                <strong>Research, Learn and develop</strong> are the three things make an day as prouctive one. I am a Data Scientist/Full Stack Developer(MERN). I train complex Deep learning models and converted into user friendly application to used by everyone around the world.
            </p>
            <br/>
            <p className='text-xl'>
               My main aim was to build AI system to explore space because space is an huge area and still now we explore 0.0001% in space. Everyday I am learning new things and tech stacks to improve myself to achieve my goal. I learn most of the things from the errors and bugs, while solving them i have able to get new knowledge. 
            </p>
        </div>
    </div>
  )
}

export default About