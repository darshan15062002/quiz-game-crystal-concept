import React from 'react'
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { SlMagnifier } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import './Discussion.css'

const Discussion = () => {
    const discussion_topics = [
        {
            head: 'Heading',
            subhead: 'SubHeading',
            content: 'Content',
            src: 'https://placeimg.com/192/192/people',
        },
        {
            head: 'Heading',
            subhead: 'SubHeading',
            content: 'Content',
            src: 'https://placeimg.com/192/192/people',
        },
        {
            head: 'Heading',
            subhead: 'SubHeading',
            content: 'Content',
            src: 'https://placeimg.com/192/192/people',
        },
        {
            head: 'Heading',
            subhead: 'SubHeading',
            content: 'Content',
            src: 'https://placeimg.com/192/192/people',
        },
        {
            head: 'Heading',
            subhead: 'SubHeading',
            content: 'Content',
            src: 'https://placeimg.com/192/192/people',
        },
        {
            head: 'Heading',
            subhead: 'SubHeading',
            content: 'Content',
            src: 'https://placeimg.com/192/192/people',
        },
        {
            head: 'Heading',
            subhead: 'SubHeading',
            content: 'Content',
            src: 'https://placeimg.com/192/192/people',
        },
        {
            head: 'Heading',
            subhead: 'SubHeading',
            content: 'Content',
            src: 'https://placeimg.com/192/192/people',
        },
        {
            head: 'Heading',
            subhead: 'SubHeading',
            content: 'Content',
            src: 'https://placeimg.com/192/192/people',
        },
    ]
    return (
        <>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-24 pt-12 pb-6 px-6 lg:pb-0">
                <div>
                    <div className="flex justify-start items-center text-gray-500 text-sm font-semibold underline">
                        <BsFillCaretLeftFill></BsFillCaretLeftFill>
                        <Link to="/competition">Back to Code Tikki</Link>
                    </div>
                    <h2
                        className=" font-semibold text-gray-700"
                        style={{ font: '31px/37px Pretzel' }}
                    >
                        DISCUSSIONS
                    </h2>
                    <div className="selection-container text-gray-600">
                        <div className="custom-select-box">
                            <select name="" id="" className="level_menu">
                                <option value="">Categories</option>
                                <option value="">Categories 2</option>
                                <option value="">Categories 3</option>
                            </select>
                            <IoIosArrowDropdownCircle className="select-arrow"></IoIosArrowDropdownCircle>
                        </div>
                        <div className="custom-select-box">
                            <select
                                name=""
                                id=""
                                className="level_menu text-center"
                            >
                                <option value="">Latest</option>
                                <option value="">Latest 2</option>
                                <option value="">Latest 3</option>
                            </select>
                            <IoIosArrowDropdownCircle className="select-arrow"></IoIosArrowDropdownCircle>
                        </div>
                    </div>
                </div>
                <div className="searchBox my-4 self-start lg:w-1/3 lg:mx-0 sm:w-1/2 sm:mx-auto ">
                    <SlMagnifier className="magnifyGlass"></SlMagnifier>
                    <input
                        type="text"
                        placeholder="Search"
                        className="search"
                        name="Search"
                    />
                </div>
            </div>
            <div className=" h-[850px] mb-5 " style={{ color: '#707070' }}>
                <div
                    className="border-2 px-2 py-3 mx-3 mb-6 h-[150px]"
                    style={{
                        boxShadow: 'inset 0px 0px 10px 0px rgb(0 0 0 / 16%)',
                    }}
                >
                    <div className="flex flex-col justify-around items-center gap-4 p-6  mb-6  w-[95%] m-auto">
                        <div className="rear_head">
                            {/* {uppercase text-sm flex justify-between mb-2} */}
                            <h2>topics</h2>
                            <h2>views</h2>
                        </div>
                        <div className="flex flex-col gap-2 dicussion_holder">
                            {discussion_topics.map((topic, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center border-2 p-2"
                                    >
                                        <div className="disc_topics uppercase self-start">
                                            <h3 style={{ fontSize: '17px' }}>
                                                {topic.head}
                                            </h3>
                                            <h4 style={{ fontSize: '13px' }}>
                                                {topic.subhead}
                                            </h4>
                                            <p style={{ fontSize: '9px' }}>
                                                {topic.content}
                                            </p>
                                        </div>
                                        <div className="avatar">
                                            <div className="rounded">
                                                <img src={topic.src} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discussion
