import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import { BiSolidCameraMovie } from "react-icons/bi";

const Header = () => {
  return (
    <div className="navbar bg-neutral shadow-sm">
      {/* Mobile Menu (Dropdown) */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52 text-neutral-content">
            <li>
              <div className="form-control">
                <input 
                  type="text" 
                  placeholder="Search Movies" 
                  className="input input-bordered w-full" 
                />
              </div>
            </li>
            <li><Link to="./" className="hover:text-info">Home</Link></li>
            <li><Link to="./Movies" className="hover:text-info">Movies</Link></li>
            <li><Link to="./Series" className="hover:text-info">Series</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-neutral-content">
          <BiSolidCameraMovie className='text-4xl' /> WATCH
        </Link>
      </div>

      {/* Desktop Menu (Hidden on mobile) */}
      <div className="navbar-center hidden lg:flex text-neutral-content">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="./" className="hover:text-info">Home</Link></li>
          <li><Link to="./Movies" className="hover:text-info">Movies</Link></li>
          <li><Link to="./Series" className="hover:text-info">Series</Link></li>
        </ul>
      </div>

      {/* Search Bar (Visible only on desktop) */}
      <div className="navbar-end hidden lg:flex">
        <label className="input input-bordered flex items-center gap-2 me-5">
          <input 
            type="search" 
            className="grow" 
            placeholder="Search Movies" 
            required 
          />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;