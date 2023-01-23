import React from 'react'
import HeroImage from '../assets/Karthi_hero.jpg'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a AI Reasearcher
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                Hi There! I'm Karthi Prasad S, a researcher who is intrested to discover new things and provide AI based solutions to the complex real world problems. <br />
                Currently, an Undergraduate majoring in Artificial Intelligence and Data Science at KPRIET,Coimbatore. I build Deep learning models and Reinforcement learning agents and develop full stack applications.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight size={20} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
             <img src={HeroImage} alt='My_Profile' className='rounded-2xl mx-auto md:w-full'/>
        </div>
    </div>
  )
}

export default Home