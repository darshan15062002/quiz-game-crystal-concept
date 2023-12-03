import React from 'react'
import { Link } from 'react-router-dom'

export const Feature = ({ ideabg, title, description, buttonText, reversed = false, linkto }) => {
    return (
        <div className={`flex lg:gap-10  justify-between ${reversed ? " lg:flex-row-reverse " : "  lg:flex-row"} mx-auto flex-col `}>
            <div className={`  h-full flex justify-between items-center ${reversed ? 'flex-row-reverse' : ""}`}>
                <img src={ideabg} alt="" className="w-20 lg:w-full rounded-lg h-full object-cover" />
                <h2 className="sm:text-3xl mr-7 lg:hidden text-black text-xl font-bold leading-tight">{title}</h2>
            </div>

            <div className="flex flex-col justify-center w-full">
                <h2 className="sm:text-3xl text-black hidden sm:block text-xl font-bold leading-tight">{title}</h2>
                <p className="sm:mt-4 sm:mb-8 mb-3 mt-2 text-gray-500 text-sm">{description}</p>
                <div className={`w-full flex justify-start ${reversed ? "justify-end lg:justify-start" : ""}`}>
                    <Link to={linkto} className="relative right-0 w-fit p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span className="relative lg:px-6 lg:py-3 px-4 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white font-sans">     {buttonText}</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
