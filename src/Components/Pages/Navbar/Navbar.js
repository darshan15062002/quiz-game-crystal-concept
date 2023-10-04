import React, { useContext, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';


const Navbar = () => {

  const { currentUser } = useContext(AuthContext)






  const menuItem = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      {currentUser.isAuthenticated ? (<div className='flex lg:flex-row flex-col'>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link to="/playquiz">PLAY QUIZ</Link>
        </li>
        {currentUser.user.role === 'admin' && (
          <li>
            <Link to="/addquiz">ADD QUIZ</Link>
          </li>
        )}
      </div>) : (<>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/signup">SIGNUP</Link>
        </li>
      </>)}
      {/* <li>
        <Link to="/problems">PROBLEMS</Link>
      </li>
      <li>
        <Link to="/ide">IDE</Link>
      </li>
      <li>
        <Link to="/competition">COMPETITION</Link>
      </li>
      <li>
        <Link to="/discussion">DISCUSSION</Link>
      </li>
     
      <li>
        <Link to="/collaboration">COLLABORATION</Link>
      </li> */}


    </>

  );

  return (
    <div className="navbar absolute z-50 bg-white shadow-md flex justify-between items-center text-black text-sm px-6">
      <div className="navbar-start">
        <Link to='/' className='text-white font-serif  mt-4 sm:text-xl text-xl mb-5   font-extrabold' style={{ fontFamily: 'Poppins', color: '#2D80F6' }}>Crystal <span className='text-[#09BD81]'>Concept</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItem}</ul>
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-outline  lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="#09BD81"
            viewBox="0 0 24 24"
            stroke="#09BD81"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuItem}
        </ul>
      </div>
    </div >


  );
};

export default Navbar;
