import { FaHome } from 'react-icons/fa';
import { CiBookmarkCheck } from 'react-icons/ci';
import { NavLink } from 'react-router';
import { TbLogs } from 'react-icons/tb';
import { IoIosContacts } from 'react-icons/io';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start mx-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  isActive ? 'underline text-blue-500 font-bold' : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/my-bookings'}
                className={({ isActive }) =>
                  isActive ? 'underline text-blue-500 font-bold' : ''
                }
              >
                My-Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/blogs'}
                className={({ isActive }) =>
                  isActive ? 'underline text-blue-500 font-bold' : ''
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <h2 className="text-xl font-extrabold font-[Plus_Jakarta_Sans]">
          <span className="flex items-center">
            <img
              src="https://i.ibb.co.com/SgvjZTS/logo.png"
              alt=""
              className="w-[48px] h-[48px]"
            />
            Law.BD
          </span>
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex mx-auto">
        <ul className="menu menu-horizontal px-1 text-lg font-[sora]">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? 'underline text-blue-500 font-bold' : ''
            }
          >
            <li className="px-4"><span><FaHome />Home</span></li>
          </NavLink>
          <NavLink
            to={'/my-bookings'}
            className={({ isActive }) =>
              isActive ? 'underline text-blue-500 font-bold' : ''
            }
          >
            <li className="px-4"><span><CiBookmarkCheck />My-Bookings</span></li>
          </NavLink>
          <NavLink
            to={'/blogs'}
            className={({ isActive }) =>
              isActive ? 'underline text-blue-500 font-bold' : ''
            }
          >
            <li className="px-4"> <span><TbLogs />Blogs</span></li>
          </NavLink>
          <NavLink
            to={'/contact'}
            className={({ isActive }) =>
              isActive ? 'underline text-blue-500 font-bold' : ''
            }
          >
            <li className="px-4"><span><IoIosContacts />Contact US</span></li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end mx-15">
        <a className="btn bg-[#0EA106] p-5 px-8 text-lg text-center text-white rounded-4xl hidden md:flex">
          Contact Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;
