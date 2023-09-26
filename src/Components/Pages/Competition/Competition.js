import React,{useRef} from 'react';
import { BsFillCaretLeftFill } from "react-icons/bs";
import {FaAngleRight as Right} from  "react-icons/fa"
import {FaAngleLeft as Left} from  "react-icons/fa"
import {FaSearch as Search} from  "react-icons/fa"
import { Link } from 'react-router-dom';
import './Competition.css'

const Competition = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    
  

    const scrollLeft1 = () => {
        if(window.screen.width <=320){
            ref1.current.scrollLeft += -231;
        }
        else if(window.screen.width <=375){
            ref1.current.scrollLeft += -252.5;
        }
        else if(window.screen.width <=425){
            ref1.current.scrollLeft += -294;
        }
        else if(window.screen.width <=786){
            ref1.current.scrollLeft += -276.5;
        }
        else if(window.screen.width <=1024){
            ref1.current.scrollLeft += -373;
        }
        else if(window.screen.width <=1440){
            ref1.current.scrollLeft += -360;
        }
        else if(window.screen.width <=1920){
            ref1.current.scrollLeft += -485;
        }
        else if(window.screen.width <=2560){
            ref1.current.scrollLeft += -640;
        }
      };
    const scrollRight1 = () => {
        if(window.screen.width <=320){
        ref1.current.scrollLeft += 231;
        }
        else if(window.screen.width <=375){
            ref1.current.scrollLeft += 252.5;
        }
        else if(window.screen.width <=425){
            ref1.current.scrollLeft += 290;
        }
        else if(window.screen.width <=786){
            ref1.current.scrollLeft += 276.5;
        }
        else if(window.screen.width <=1024){
            ref1.current.scrollLeft += 373;
        }
        else if(window.screen.width <=1440){
            ref1.current.scrollLeft += 360;
        }
        else if(window.screen.width <=1920){
            ref1.current.scrollLeft += 485;
        }
        else if(window.screen.width <=2560){
            ref1.current.scrollLeft += 640;
        }
      };
    

      const scrollLeft2 = () => {
        if(window.screen.width <=320){
            ref2.current.scrollLeft += -231;
        }
        else if(window.screen.width <=375){
            ref2.current.scrollLeft += -252.5;
        }
        else if(window.screen.width <=425){
            ref2.current.scrollLeft += -276.5;
        }
        else if(window.screen.width <=1024){
            ref2.current.scrollLeft += -373;
        }
        else if(window.screen.width <=1440){
            ref2.current.scrollLeft += -360;
        }
        else if(window.screen.width <=1920){
            ref2.current.scrollLeft += -485;
        }
        else if(window.screen.width <=2560){
            ref2.current.scrollLeft += -640;
        }
      };
    const scrollRight2 = () => {
        if(window.screen.width <=320){
            ref2.current.scrollLeft += 231;
        }
        else if(window.screen.width <=375){
            ref2.current.scrollLeft += 252.5;
        }
        else if(window.screen.width <=425){
            ref2.current.scrollLeft += 276.5;
        }
        else if(window.screen.width <=1024){
            ref2.current.scrollLeft += 373;
        }
        else if(window.screen.width <=1024){
            ref2.current.scrollLeft += 360;
        }
        else if(window.screen.width <=1920){
            ref2.current.scrollLeft += 485;
        }
        else if(window.screen.width <=2560){
            ref2.current.scrollLeft += 640;
        }
      };
    

      const scrollLeft3 = () => {
        if(window.screen.width <=320){
            ref3.current.scrollLeft += -231;
        }
        else if(window.screen.width <=375){
            ref3.current.scrollLeft += -252.5;
        }
        else if(window.screen.width <=425){
            ref3.current.scrollLeft += -276.5;
        }
        else if(window.screen.width <=1024){
            ref3.current.scrollLeft += -373;
        }
        else if(window.screen.width <=1024){
            ref3.current.scrollLeft += -360;
        }
        else if(window.screen.width <=1920){
            ref3.current.scrollLeft += -485;
        }
        else if(window.screen.width <=2560){
            ref3.current.scrollLeft += -640;
        }
      };
    const scrollRight3 = () => {
        if(window.screen.width <=320){
             ref3.current.scrollLeft += 231;
        }
        else if(window.screen.width <=375){
             ref3.current.scrollLeft += 252.5;
        }
        else if(window.screen.width <=425){
            ref3.current.scrollLeft += 276.5;
        }
        else if(window.screen.width <=1024){
            ref3.current.scrollLeft += 373;
        }
        else if(window.screen.width <=1024){
            ref3.current.scrollLeft += 360;
        }
        else if(window.screen.width <=1920){
            ref3.current.scrollLeft += 485;
        }
        else if(window.screen.width <=2560){
            ref3.current.scrollLeft += 640;
        }
      };


    return (
        <>
            <div className='flex flex-col md:flex-row  md:justify-between lg:items-center lg:px-24 pt-12 pb-6 px-5 lg:pb-0'>
                <div>
                    <div className='flex justify-start items-center text-gray-500 text-sm font-semibold underline ide'>
                        <BsFillCaretLeftFill></BsFillCaretLeftFill>
                        <Link to='/ide'>Back to Code Tikki</Link>
                    </div>
                    <h2 className='text-3xl font-semibold mb-3 text-gray-700 uppercase competition  '>Competition</h2>
                    <div className='flex lg:justify-center gap-2 mb-2 text-xs font-medium selections'>
                        <select name="" id="" className='shadow-md text-gray-500 select select-accent border-2'>
                            <option value="" >Categories </option>
                            <option value="" >Categories 1</option>
                            <option value="" >Categories 2</option>
                        </select>
                        <select name="" id="" className='shadow-md text-gray-500 select select-accent border-2'>
                            <option value="" >Latest </option>
                            <option value="" >Latest 1</option>
                            <option value="" >Latest 2</option>
                        </select>
                    </div>
                </div>
                <div className="search-bar">
                    <Search size="27px" className="search" />
                    <input type="text"  className="px-3 py-2 w-full outline-none border-hidden rounded-md border-gray-300 text " />
                </div>
                
            </div>
            <div className="container">
                <div className='border-2 px-2 py-3 mx-3 mb-6 component'>
                    <h2 className='text-3xl font-semibold text-gray-700  uppercase heading'>Upcoming Contests</h2>
                    <div className="content">
                        <Left size="23.62px" onClick={() => scrollLeft1()} className="scroll-icon"/>
                        <div className='flex  lg:flex-row justify-around items-center  border-x border-b-2 wraper' ref={ref1}>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                          
                        </div>
                        <Right size="23.62px" onClick={() => scrollRight1()} className="scroll-icon" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='border-2 px-2 py-3 mx-3 mb-6 component'>
                    <h2 className='text-3xl font-semibold text-gray-700  uppercase heading'>RECENT CONTESTS</h2>
                    <div className="content">
                        <Left size="23.62px" onClick={() => scrollLeft2()} className="scroll-icon"/>
                        <div className='flex  lg:flex-row justify-around items-center  border-x border-b-2 wraper' ref={ref2}>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                          
                        </div>
                        <Right size="23.62px" onClick={() => scrollRight2()} className="scroll-icon" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='border-2 px-2 py-3 mx-3 mb-6 component'>
                    <h2 className='text-3xl font-semibold text-gray-700  uppercase heading'>ALL CONTEST</h2>
                    <div className="content">
                        <Left size="23.62px" onClick={() => scrollLeft3()} className="scroll-icon"/>
                        <div className='flex  lg:flex-row justify-around items-center  border-x border-b-2 wraper' ref={ref3}>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="py-2 px-4 text-gray-600">
                                    <h2 className="font-bold  uppercase text-xl lg:w-24 event-heading" >Event<br /> Name</h2>
                                    <p className='font-semibold lg:text-base text-sm event-paragraph'>description</p>
                                    <p className='text-xs border-b-2 uppercase pt-3 font-semibold  event-button'>Read More</p>
                                </div>
                            </div>
                          
                        </div>
                        <Right size="23.62px" onClick={() => scrollRight3()} className="scroll-icon" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Competition;




