import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';



const Navbar = () => {

  const { currentUser } = useContext(AuthContext)


  if (currentUser.loading === true) return <div className=" bg-black flex justify-center items-center">Loading....</div>




  const menuItem = (
    <>
      <li>
        <Link className='text-black' to="/">HOME</Link>
      </li>
      <li>
        <Link className='text-black' to="/search">SEARCH</Link>
      </li>


      {currentUser?.isAuthenticated ?
        (<div className='flex lg:flex-row flex-col'>
          <li>
            <Link className='text-black' to="/profile">PROFILE</Link>
          </li>
          <li>
            <Link className='text-black' to="/playquiz">PLAY QUIZ</Link>
          </li>

          <li>
            <Link className='text-black' to="/summarizer">SUMMARIZER</Link>
          </li>

          {currentUser?.user?.role === "admin" && <li>
            <Link className='text-black' to="/admin">ADMIN</Link>
          </li>}
        </div>) : (<>

          <li>
            <Link className='text-black' to="/login">LOGIN</Link>
          </li>
          <li>
            <Link className='text-black' to="/signup">SIGNUP</Link>
          </li>

        </>)}


    </>

  );

  return (
    <div className="navbar h-16 w-screen  shadow-md text-sm   bg-slate-100/60  fixed  z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="flex sm:mx-24 mx-5  w-full h-full justify-between items-center ">

        <Link to='/' className=' font-serif  mt-4 sm:text-2xl text-xl mb-5   font-extrabold' style={{ fontFamily: 'Poppins', color: '#2D80F6' }}>   Crystal <span className='text-[#09BD81]'>Concept</span></Link>

        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>

        <div className="dropdown block sm:hidden dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-outline  border-2 border-black  lg:hidden">
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
            className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
      </div>
    </div >


  );
};

export default Navbar;
