import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Pages/Footer/Footer';
import Navbar from '../Components/Pages/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;