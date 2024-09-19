import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
const Navbar = () => {
  
    
  const [nav,setNav] = useState(false)
  return (
    <>
      <div className="navbar bg-gradient-to-r from-zinc-800 to-gray-800 w-[100vw] h-16 flex items-center justify-between  px-4">
        <h1 className="font-signature text-white text-5xl ml-3  z-10">
          Ritesh
        </h1>

        <ul className="hidden md:flex">
          {["home", "about", "portFolio", "experience", "contact us"].map(
            (items, index) => (
              // {index===4&&ml-4}]
              <li
                key={index}
                className="capitalize px-4   text-gray-400 cursor-pointer hover:scale-105 duration-200"
              >
                <a href="">
                  <Link to={items} smooth duration={500} >
                    {items}
                  </Link>
                </a>
              </li>
            )
          )}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-gray-400 pr-4 z-10"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {["home", "about", "portFolio", "experience", "contact us"].map(
              (items, index) => (
                // {index===4&&ml-4}]
                <li
                  key={index}
                  className="capitalize px-4 text-4xl py-5    cursor-pointer hover:scale-105 duration-200 text-gray-400"
                >
                  <a href="" onClick={() => setNav(!nav)}>
                    <Link
                      to={items}
                      smooth
                      duration={500}
                      onClick={() => setNav(!nav)}
                    >
                      {items}
                    </Link>
                  </a>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar