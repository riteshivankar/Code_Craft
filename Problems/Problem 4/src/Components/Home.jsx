import React from 'react'
import LocomotiveScroll from "locomotive-scroll";
import { Link } from 'react-scroll';

import { RiArrowRightSLine } from "react-icons/ri";
const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 flex '> 
      <div className='max-w-screen-lg mx-auto flex flex-col  items-center justify-center text-white h-full px-4 md:flex-row'>
        <div >
          <h1 className='text-4xl sm:text-7xl font-bold text-white'>I&apos;m Full Stack Developer </h1>
          <p className='text-gray-500 py-4 max-w-md'>
            Skilled frontend developer with a passion for creating stunning,
            user-friendly web interfaces. Expert in HTML, CSS, and JavaScript,
            dedicated to delivering seamless and responsive digital experiences.
          </p>
            <div>
              <Link to='portFolio' smooth duration={500} >
                <button className='flex  items-center  rounded-md mx-2 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-200'>
                PortFolio
                <span className="hover:rotate-90 duration-300">
                    <RiArrowRightSLine size={25} className='ml-1' />
                </span>
                </button>
                </Link>
            </div>

        </div>
        <div>
            <img className='rounded-lg w-[50vw]  my-4 md:w-full shadow-md shadow-blue-500' src="src/assets/hero.jpg" alt=" My profile picture" />
        </div>
      </div>
    </div>
  );
}

export default Home