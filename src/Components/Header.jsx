import React from 'react';
import { Link } from 'react-router-dom'  
import { Button } from "@material-tailwind/react";

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
          <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-neutral text-neutral-content">
          <li><Link to="./" className="hover:text-info">Home</Link></li>
          <li><Link to="./Movies" className="hover:text-info">Movies</Link></li>
          <li><Link to="./Series" className="hover:text-info">Series</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-neutral-content">WATCH</a>
      </div>

      {/* Desktop Menu (Hidden on mobile) */}
      <div className="navbar-center hidden lg:flex text-neutral-content">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="./" className="hover:text-info">Home</Link></li>
          <li><Link to="./Movies" className="hover:text-info">Movies</Link></li>
          <li><Link to="./Series" className="hover:text-info">Series</Link></li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="navbar-end">
        <label className="input flex me-5">
          <input type="search" required placeholder="Search Movies" />
        </label>
        <Link to='/SignUp' className="hover:text-info">
        <Button className='bg-neutral-content me-1' variant="outlined">SignUp</Button>
        </Link>
        
        <Link to='/SignIn' className="hover:text-info">
        <Button className='bg-neutral-content me-1' variant="outlined">SignIn</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;