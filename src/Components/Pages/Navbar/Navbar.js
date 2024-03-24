import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';



const Navbar = () => {

  const { currentUser } = useContext(AuthContext)


  if (currentUser.loading === true) return <div className=" bg-black flex justify-center items-center">Loading....</div>




  const menuItem = (
    <>
      {/* <li>
        <Link className='text-black' to="/">HOME</Link>
      </li> */}



      {currentUser?.isAuthenticated ?
        (<div className='flex lg:flex-row flex-col'>
          <li>
            <Link className='text-black' to="/playquiz">PLAY QUIZ</Link>
          </li>
          <li>
            <Link className='text-black' to="/search">SEARCH</Link>
          </li>

          <li>
            <Link className='text-black' to="/summarizer">SUMMARIZER</Link>
          </li>
          <li>
            <Link className='text-black' to="/profile">PROFILE</Link>
          </li>


          {currentUser?.user?.role === "admin" && <li>
            <Link className='text-black' to="/admin">ADMIN</Link>
          </li>}
        </div>) : (<>

          <li>
            <Link className='text-black  ' to="/requesttutor">REQUEST A TUTOR</Link>
          </li>
          <li>
            <Link className='text-black  ' to="/joinastutor">JOIN AS TUTOR</Link>
          </li>
          <a href="/login" class="relative items-center justify-center flex  px-5 py-2 overflow-hidden font-medium transition-all bg-[#EB676A] rounded-full hover:bg-white group">
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#EB676A]">LOGIN / SIGNUP</span>
          </a>




        </>)}


    </>

  );

  return (
    <div className="navbar h-16 w-screen  shadow-md text-sm   bg-slate-100/60  fixed  z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="flex sm:mx-24 mx-5  w-full h-full justify-between items-center ">

        <Link to='/' className=' font-serif  mt-4 sm:text-2xl text-xl mb-5   font-extrabold' style={{ fontFamily: 'Poppins', color: '#262D4D' }}>   Crystal <span className='text-[#EB676A]'>Concept</span></Link>

        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>

        <div className="dropdown block sm:hidden dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-outline   border-2 border-black  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="#262D4D"
              viewBox="0 0 24 24"
              stroke="#262D4D"
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
