/* eslint-disable no-unused-vars */
import React from "react";

// import Image from "next/image";

const Experience = () => {
  // const elements = [
  //   {
  //     id:1,
  //     src:html,
  //     title:"HTML",
  //     style:"shadow-orange-500"
  //   },
  //   {
  //     id:2,
  //     src: "src/assets/CSS.png",
  //     title:css,
  //     style:"shadow-blue-600"
  //   },
  //   {
  //     id:3,
  //     src:"src/assets/JavaScript-logo.png",
  //     title:javascript,
  //     style:"shadow-yellow-700"
  //   },
  //   {
  //     id:4,
  //     src:"src/assets/C_Logo.png",
  //     title:nextjs,
  //     style:"shadow-blue-800"
  //   },
  //   {
  //     id:5,
  //     src:"src/assets/Python.jpg",
  //     title:node,
  //     style:"shadow-green-700"
  //   },
  //   {
  //     id:6,
  //     src:"src/assets/react.png",
  //     title:reactImage,
  //     style:"shadow-blue-300"
  //   },
  //   {
  //     id:7,
  //     src:"src/assets/tailwind.png",
  //     title:tailwind,
  //     style:"shadow-blue-500"
  //   }
  // ]
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-400 p-2 inline md:mt-10">
            Experince
          </p>
          <p className="py-6">
            This are the Technologies I have been Worked With
          </p>
        </div>
        {/* {elements.map(({id,src,title,style})=>{
          })} */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div
            className={
              "hover:scale-105 shadow-md duration-300 py-2 rounded-lg   shadow-orange-700"
            }
          >
            <img
              src="public/assets/experience/html.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p>HTML</p>
          </div>
          <div
            className={
              "hover:scale-105 shadow-md duration-300 py-2 rounded-lg   shadow-blue-700"
            }
          >
            <img
              src="public/assets/experience/css.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p>CSS</p>
          </div>
          <div
            className={
              "hover:scale-105 shadow-md duration-300 py-2 rounded-lg   shadow-yellow-500"
            }
          >
            <img
              src="/assets/experience/javascript.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p>JavaScript</p>
          </div>
          <div
            className={
              "hover:scale-105 shadow-md duration-300 py-2 rounded-lg   shadow-sky-200 "
            }
          >
            <img
              src="src/images/Python.jpg"
              alt=""
              className="w-20 mx-auto  "
            />
            <p>Python</p>
          </div>
          <div
            className={
              "hover:scale-105 shadow-md duration-300 py-2 rounded-lg   shadow-blue-700"
            }
          >
            <img src="src/images/C_Logo.png" alt="" className="w-20 mx-auto" />
            <p>C</p>
          </div>
          <div
            className={
              "hover:scale-105 shadow-md duration-300 py-2 rounded-lg   shadow-blue-400"
            }
          >
            <img
              src="/assets/experience/react.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p>React</p>
          </div>
          <div
            className={
              "hover:scale-105 shadow-md duration-300 py-2 rounded-lg   shadow-sky-800"
            }
          >
            <img
              src="/assets/experience/tailwind.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
