import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Book, Person2Rounded, Person2Sharp, Person2TwoTone } from '@mui/icons-material';
const Sidebar = ({ isOpen }) => {
  return (
    <div className={` ${isOpen ? "fixed w-1/2 z-10 h-screen pt-16" : "hidden "} sm:block sm:w-1/5 border-r-2 border-slate-300 sm:min-h-full bg-white`}>
      <div className="h-[50px] flex justify-center items-center">
        <Link to="/" style={{ textDecoration: "none" }} >
          <span className="text-xl font-bold text-[#EB676A]">Crystal Concept</span>
        </Link>
      </div>
      <hr className='h-0' />
      <div className="pl-3">
        <ul className='list-none m-0 p-0'>
          <p className="text-xs font-bold text-[#999] mt-4 mb-1">MAIN</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
              <DashboardIcon className="text-xl text-[#EB676A]" />
              <span className='text-xs font-normal text-[#888] ml-1'>Dashboard</span>
            </li>
          </Link>
          <p className="text-xs font-bold text-[#999] mt-4 mb-1">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]' >
              <PersonOutlineIcon className="text-xl text-[#EB676A]" />
              <span className='text-xs font-normal text-[#888] ml-1'>Users</span>
            </li>
          </Link>
          <Link to="/admin/students" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
              <Person2Rounded className="text-xl text-[#EB676A]" />
              <span className='text-xs font-normal text-[#888] ml-1'>Students</span>
            </li>
          </Link>
          <Link to="/admin/teachers" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
              <Person2TwoTone className="text-xl text-[#EB676A]" />
              <span className='text-xs font-normal text-[#888] ml-1'>Teachers</span>
            </li>
          </Link>

          <Link to="/admin/quizs" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
              <Book className="text-xl text-[#EB676A]" />
              <span className='text-xs font-normal text-[#888] ml-1'>Quizs</span>
            </li >
          </Link>
          <p className="text-xs font-bold text-[#999] mt-4 mb-1">USEFUL</p>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <InsertChartIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal text-[#888] ml-1'>Attendance</span>
          </li>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <NotificationsNoneIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal text-[#888] ml-1'>Marks</span>
          </li>
          <p className="text-xs font-bold text-[#999] mt-4 mb-1">SERVICE</p>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <SettingsSystemDaydreamOutlinedIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal text-[#888] ml-1'>System Health</span>
          </li>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <PsychologyOutlinedIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal text-[#888] ml-1'>Logs</span>
          </li>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <SettingsApplicationsIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal text-[#888] ml-1'>Settings</span>
          </li>
          <p className="text-xs font-bold text-[#999] mt-4 mb-1">USER</p>
          <li className='flex  items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <AccountCircleOutlinedIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal text-[#888] ml-1'>Profile</span>
          </li>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <ExitToAppIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal text-[#888] ml-1'>Logout</span>
          </li>
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