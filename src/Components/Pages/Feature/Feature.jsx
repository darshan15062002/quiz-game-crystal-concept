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
                        <a href="#_" class="relative items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-[#EB676A] rounded-full hover:bg-white group">
                            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#EB676A]">{buttonText}</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
