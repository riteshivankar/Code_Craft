import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const SocialLink = [
    {
      id: 1,
      child: (
        <>
          Linked IN <FaLinkedin size={30} />
        </>
      ),

      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/riteshivankar/tictactoegame.git",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:promotion.in12@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsPersonLinesFill size={30} />
        </>
      ),
      href: "public/Assignment-1.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className=" hidden lg:flex flex-col fixed top-[35%] left-0">
      <ul>
        {SocialLink.map(({ id, child, href, download, style }) => (
          <li
            key={id}
            className={
              "flex bg-gray-800 justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
