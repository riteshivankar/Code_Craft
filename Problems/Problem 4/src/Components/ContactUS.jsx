/* eslint-disable no-unused-vars */
import React from 'react'

const ContactUS = () => {
  return (
    <div name="contact us" className="bg-gradient-to-b from-black to-gray-800">
      <div>
        <div>
          <p className="text-4xl font-bold text-white border-b-4 border-gray-400 inline  ">
            Contact Us{" "}
          </p>
          <p className=" text-white py-6">
            Fill the form below To get in Touch with us
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bdryxpgb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="text-white p-2 bg-transparent h
                    border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="text-white p-2 bg-transparent 
                    border-2 rounded-md focus:outline-none my-4 "
            />
            <textarea
              name="message"
              id=""
              rows="10"
              placeholder="Enter Your Message Here"
              className="text-white p-2 bg-transparent 
                    border-2 rounded-md focus:outline-none"
            ></textarea>
            <button className="bg-gradient-to-r rounded-md  from-cyan-500 to-blue-500 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300 text-white px-6">
              Lets Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUS