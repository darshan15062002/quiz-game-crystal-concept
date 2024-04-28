import React, { useEffect, useState } from 'react';

import './AddQuiz.scss'
import { Outlet, } from 'react-router-dom';

import Sidebar from '../../Components/Pages/Sidebar/Sidebar';
import Hamburger from 'hamburger-react';



const Admin = () => {



    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!isOpen);
    };







    return (
        <div className=' min-h-screen flex'>
            <div className={`mobile-toggle sm:invisible visible z-20 ${isOpen ? "fixed" : "absolute"} top-6 left-6`}>
                <Hamburger toggled={isOpen} toggle={handleToggle} />
            </div>
            <Sidebar isOpen={isOpen} />
            <Outlet />

        </div >

    );
};

export default Admin;
