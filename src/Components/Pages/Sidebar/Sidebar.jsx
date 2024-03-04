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
const Sidebar = () => {
  return (
    <div className=" w-1/6  border-r-2 min-h-screen bg-white">
      <div className="h-[50px] flex justify-center items-center">
        <Link to="/" style={{ textDecoration: "none" }} >
          <span className="text-xl font-bold text-[#EB676A]">Crystal Concept</span>
        </Link>
      </div>
      <hr className='h-0'/>
      <div className="pl-3">
        <ul className='list-none m-0 p-0'>
          <p className="text-xs font-bold text-[#999] mt-4 mb-1">MAIN</p>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <DashboardIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal color-[#888] ml-1'>Dashboard</span>
          </li>
          <p className="text-xs font-bold text-[#999] mt-4 mb-1">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]' >
              <PersonOutlineIcon className="text-xl text-[#EB676A]" />
              <span className='text-xs font-normal color-[#888] ml-1'>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
              <StoreIcon className="text-xl text-[#EB676A]" />
              <span className='text-xs font-normal color-[#888] ml-1'>Products</span>
            </li>
          </Link>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <CreditCardIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal color-[#888] ml-1'>Orders</span>
          </li>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <LocalShippingIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal color-[#888] ml-1'>Delivery</span>
          </li >
          <p className="text-xs font-bold text-[#999] mt-4 mb-1">USEFUL</p>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <InsertChartIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal color-[#888] ml-1'>Stats</span>
          </li>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <NotificationsNoneIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal color-[#888] ml-1'>Notifications</span>
          </li>
          <p className="text-xs font-bold text-[#999] mt-4 mb-1">SERVICE</p>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <SettingsSystemDaydreamOutlinedIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal color-[#888] ml-1'>System Health</span>
          </li>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <PsychologyOutlinedIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal color-[#888] ml-1'>Logs</span>
          </li>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <SettingsApplicationsIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal color-[#888] ml-1'>Settings</span>
          </li>
          <p className="text-xs font-bold text-[#999] mt-4 mb-1">USER</p>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <AccountCircleOutlinedIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal color-[#888] ml-1'>Profile</span>
          </li>
          <li className='flex items-center p-1 cursor-pointer hover:bg-[#ece8ff]'>
            <ExitToAppIcon className="text-xl text-[#EB676A]" />
            <span className='text-xs font-normal color-[#888] ml-1'>Logout</span>
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
    </div>
  )
}

export default Sidebar