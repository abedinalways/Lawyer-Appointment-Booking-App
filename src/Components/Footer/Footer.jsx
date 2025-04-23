import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded mt-8 overflow-hidden">
      <div>
        <h2 className="text-xl font-extrabold font-[Plus_Jakarta_Sans]">
          <span className="flex items-center text-white">
            <img
              src="https://i.ibb.co.com/SgvjZTS/logo.png"
              alt=""
              className="w-[48px] h-[48px]"
            />
            Law.BD
          </span>
        </h2>
      </div>

      <nav className="grid grid-flow-col gap-4 md:gap-6 text-white text-sm md:text-lg font-[sora]">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? 'underline text-blue-500 font-bold' : ''
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/my-bookings'}
          className={({ isActive }) =>
            isActive ? 'underline text-blue-500 font-bold' : ''
          }
        >
          My-Bookings
        </NavLink>
        <NavLink
          to={'/blogs'}
          className={({ isActive }) =>
            isActive ? 'underline text-blue-500 font-bold' : ''
          }
        >
          Blogs
        </NavLink>
        <a className="link link-hover">Contact Us</a>
      </nav>
      <nav>
        <div className='min-w-screen  mx-auto'>
          <hr className="border-t border-dashed border-gray-50" />
        </div>
        <div className="grid grid-flow-col gap-4 mb-2 mt-1">
          <NavLink to="https://web.facebook.com/Abedin.always" target="_blank">
            <FaFacebook className="text-2xl text-blue-500"></FaFacebook>
          </NavLink>
          <NavLink
            to="https://www.instagram.com/abedin.always/"
            target="_blank"
          >
            <FaInstagram className="text-2xl text-red-500"></FaInstagram>
          </NavLink>
          <NavLink to="https://github.com/abedinalways" target="_blank">
            <FaGithub className="text-2xl text-white"></FaGithub>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/sheikh-minhajul-abedin-bb51162a4/" target="_blank">
            <FaLinkedin className="text-2xl text-blue-500"></FaLinkedin>
          </NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;