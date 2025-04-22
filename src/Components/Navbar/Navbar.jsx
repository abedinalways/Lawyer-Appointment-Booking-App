
import { NavLink } from 'react-router';
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
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
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
        <ul className="menu menu-horizontal px-1">
          <NavLink to={'/'} className={({isActive})=>isActive?'underline text-blue-500 font-bold':''}><li className='px-4'>Home</li></NavLink>
          <NavLink to={'/my-bookings'} className={({isActive})=>isActive?'underline text-blue-500 font-bold':''}><li className='px-4'>My-Bookings</li></NavLink>
          <NavLink to={'/blogs'} className={({isActive})=>isActive?'underline text-blue-500 font-bold':''}><li className='px-4'>Blogs</li></NavLink>
          <NavLink to={'/contact'} className={({isActive})=>isActive?'underline text-blue-500 font-bold':''}><li className='px-4'>Contact US</li></NavLink>
          
        </ul>
      </div>
      <div className="navbar-end mx-15">
        <a className="btn bg-[#0EA106] p-5 text-white rounded-4xl hidden md:flex">Contact Now</a>
      </div>
    </div>
  );
};

export default Navbar;