/* eslint-disable no-unused-vars */
import React from "react";

const PortFolio = () => {
  //  const portfolios = [
  //    {
  //      id: 1,
  //      src: "src/assets/project2.jpg",
  //    },
  //    {
  //      id: 2,
  //      src: "src/assets/project1.png",
  //    },
  //  ];
  return (
    <div
      name="portFolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 bg-gray-500">
            PortFolio
          </p>
          <p className="py-6">Check out some of my work </p>
        </div>
        {/* {portfolios.map((id,src)=>{ */}

        {/* Include MApping From here */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-13 sm:px-0">
          <div className="shadow-md shadow-gray-800 rounded-lg">
            <img
              className="rounded-md hover:scale-105 duration-300"
              src="src/images/Tictactoe.png"
              alt=""
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                <a
                  href="https://riteshivankar.github.io/tictactoegame/"
                  target="_blank"
                >
                  Demo
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                {/* Enter Your Project link Here */}

                <a
                  href="https://github.com/riteshivankar/tictactoegame.git"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-800 rounded-lg">
            <img
              className="rounded-md hover:scale-105 duration-300"
              src="src/images/reactWeather.jpg"
              alt=""
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                <a
                  href="https://github.com/riteshivankar/Weather_Project.git"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-800 rounded-lg">
            <img
              className="rounded-md hover:scale-105 duration-300"
              src="src/images/Digital Clock.png"
              alt=""
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                <a
                  href="https://github.com/riteshivankar/Digital_clock.git"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-800 rounded-lg">
            <img
              className="rounded-md hover:scale-105 duration-300"
              src="src/images/Snake_water_gun.png"
              alt=""
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                <a
                  href="https://github.com/riteshivankar/Snake_Water_Gun_Game.git"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-800 rounded-lg">
            <img
              className="rounded-md hover:scale-105 duration-300"
              src="src/images/Calculator.png"
              alt=""
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                <a
                  href="https://github.com/riteshivankar/calculator.git"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-800 rounded-lg">
            <img
              className="rounded-md hover:scale-105 duration-300"
              src="public/assets/portfolio/navbar.jpg"
              alt=""
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                <a
                  href="https://github.com/riteshivankar/TextUtility.git"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* To here....... */}
      </div>
    </div>
  );
};

export default PortFolio;
