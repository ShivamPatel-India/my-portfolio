import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold
        shadow-md"
      >
        <p className="blue-gradient_text">SP</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
      <NavLink
          to="https://drive.google.com/file/d/1s53e1LqajBanFtpeTbml1JbEeXQSFbVz/view?usp=drive_link"
          target="_blank"
          className="text-black"
        > 
          {/* <a href="https://drive.google.com/file/d/1s53e1LqajBanFtpeTbml1JbEeXQSFbVz/view?usp=drive_link" className="decoration-black">Resume</a>
           */}
           Resume
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        > 
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
