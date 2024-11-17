import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from "@mui/icons-material/Dashboard";

import { Book, } from '@mui/icons-material';
const Sidebar = ({ isOpen }) => {
  return (
    <div className={` ${isOpen ? "fixed w-1/2 z-10 h-screen pt-16" : "hidden "} sm:block sm:w-1/5  shadow-xl  sm:min-h-full bg-white`}>
      <div className="h-[50px] flex justify-center items-center">
        <Link to="/" style={{ textDecoration: "none" }} >
          <span className="text-xl font-bold text-[#EB676A]">Crystal Concept</span>
        </Link>
      </div>
      <hr className='h-0' />
      <div className="pl-3">
        <ul className='list-none m-0 p-0'>

          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
              <DashboardIcon className="text-xl text-[#EB676A]" />
              <span className='text-xs font-normal text-[#888] ml-1'>Dashboard</span>
            </li>
          </Link>





          <Link to="/admin/quizs" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
              <Book className="text-xl text-[#EB676A]" />
              <span className='text-xs font-normal text-[#888] ml-1'>Quizs</span>
            </li >
          </Link>

        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"

        ></div>
        <div
          className="colorOption"

        ></div>
      </div>
    </div >
  )
}

export default Sidebar