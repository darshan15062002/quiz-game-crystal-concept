import React, { useState } from 'react';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
// import { FaRegWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';
import IdeTab from '../IdeTab/IdeTab';
import "./Ide.css";

const Ide = () => {

    // var [tabCount, setTabCount] = useState(1);
    // const [tabArray, setTabArray] = useState([1]);
    const [tabFull, setTabFull] = useState(false)

    // const [activeIndex, setActiveIndex] = useState(1);
    // const handeTabClick = (tabIndex) => setActiveIndex(tabIndex);
    // const checkActiveIndex = (tabIndex) => (tabIndex === activeIndex); 

    // const handleTabAddition = (e) => {
    //     e.preventDefault();
    //     tabCount = tabCount+1;
    //     setTabCount(tabCount);
    //     setTabArray(oldArr => [...oldArr, tabCount]);
    // }

    // const handleTabClose = (tabIndex) => {
    //     if(tabArray.length === 1){
    //         return;
    //     }

    //     setTabArray((oldTabs) => oldTabs.filter(oldIndex => oldIndex !== tabIndex) );
    // }

    const isFull = (full) => {
        setTabFull(full);
    }

    return (
        <>
            <div className='lg:px-24 pt-12 px-6' style={tabFull ? { display: "none" } : { display: "block" }}>
                <div className='flex justify-start items-center text-gray-500 text-sm font-semibold underline'>
                    <BsFillCaretLeftFill></BsFillCaretLeftFill>
                    <Link to='/problems'>Back to Code Tikki</Link>
                </div>
                <h2 className='text-3xl font-semibold text-gray-700' style={{ fontFamily: "Pretzel" }}>IDE</h2>
                <h3 className='lg:text-3xl my-2 text-gray-700 uppercase' style={{ fontSize: "31px" }}>What is an IDE?</h3>
                <div className='text-gray-700 lg:text-xl lg:mb-12 mb-6' style={{ fontSize: "20px" }}>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className='border-2 mx-6 mb-6 text-gray-400 lg:px-32 lg:pt-10 px-4 pt-4' style={tabFull ? { paddingRight: "0px", paddingLeft: "0px", paddingTop: "0px" } : { display: "block" }}>
                <div className='flex justify-start gap-1 text-xs font-medium'>
                    <button className='flex text-gray-500 shadow-lg border-2 '
                        style={{ width: "35px" }}
                    >
                        <span>IDE</span>
                    </button>
                    {/* {
                        tabArray.map((tab) => (
                            <button className='flex justify-between text-gray-500 shadow-lg border-2 '
                             style={checkActiveIndex(tab) ? {backgroundColor: "#ccdcff", width: "54px"}: {width: "54px"} }
                             key={tab}
                             onClick={() => handeTabClick(tab)}
                             >
                                <span>IDE</span>
                                <FaRegWindowClose onClick={() => handleTabClose(tab)} height="1.2em" width="1.2em" />
                            </button>)
                        )
                    } */}
                    <button className='text-gray-500 shadow-lg border-2 px-2 py-1'>
                        <HiPlus></HiPlus>
                    </button>
                </div>
                <IdeTab fullScreen={isFull} />

                {/* {
                    tabArray.map((tab) => (
                        <IdeTab show={checkActiveIndex(tab)} fullScreen={isFull} key={tab}/>)
                    )
                } */}

            </div>
        </>
    );
};

export default Ide;