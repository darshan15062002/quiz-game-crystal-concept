import React from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaSearch as Search } from "react-icons/fa";

const Collaboration = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row  md:justify-between lg:items-center lg:px-24 pt-12 pb-6 px-5 ">
        <div>
          <div className="flex justify-start items-center text-gray-500 text-sm font-semibold underline ide">
            <BsFillCaretLeftFill></BsFillCaretLeftFill>
            <Link to="/profile">Back to Code Tikki</Link>
          </div>
          <h2 className="text-3xl font-semibold mb-3 text-gray-700 uppercase competition  ">
            Colabration
          </h2>
        </div>
        <div className="search-bar">
          <Search size="27px" className="search" />
          <input
            type="text"
            className="px-3 py-2 w-full outline-none border-hidden rounded-md border-gray-300 text "
          />
        </div>
      </div>
      <div className="conatiner h-[1000px] lg:h-[400px] mb-5 ">
        <div
          className="border-2 px-2 py-3 mx-3 mb-6 h-[150px]"
          style={{ boxShadow: "inset 0px 0px 10px 0px rgb(0 0 0 / 16%)" }}
        >
          <div className="flex flex-col lg:flex-row justify-around items-center gap-4 p-6  mb-6  w-[95%] m-auto">
            <div className="w-full border-2 rounded-lg rounded-t-none bg-white">
              <h2 className="bg-orange-400 p-3 text-white font-bold text-center">
                Business Partnership
              </h2>
              <p className="p-6 pb-4 pt-8   text-gray-900 tracking-wide h-[200px] ">
                Content
              </p>

              <div className="flex justify-center gap-2 mb-6 text-xs font-medium">
                <Link className="text-gray-500 shadow-md border-2 px-2 py-1">
                  Read More
                </Link>
                <Link className="bg-orange-400 shadow-md text-white px-2 py-1">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="w-full border-2 rounded-lg rounded-t-none bg-white">
              <h2 className="bg-orange-400 p-3 text-white font-bold text-center">
                Business Partnership
              </h2>
              <p className="p-6 pb-4 pt-8   text-gray-900 tracking-wide h-[200px] ">
                Content
              </p>

              <div className="flex justify-center gap-2 mb-6 text-xs font-medium">
                <Link className="text-gray-500 shadow-md border-2 px-2 py-1">
                  Read More
                </Link>
                <Link className="bg-orange-400 shadow-md text-white px-2 py-1">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="w-full border-2 rounded-lg rounded-t-none bg-white">
              <h2 className="bg-orange-400 p-3 text-white font-bold text-center">
                Business Partnership
              </h2>
              <p className="p-6 pb-4 pt-8   text-gray-900 tracking-wide h-[200px] ">
                Content
              </p>

              <div className="flex justify-center gap-2 mb-6 text-xs font-medium">
                <Link className="text-gray-500 shadow-md border-2 px-2 py-1 ">
                  Read More
                </Link>
                <Link className="bg-orange-400 shadow-md text-white px-2 py-1">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-700 mb-8">
        <h3 className="uppercase text-xl">get in touch with us</h3>
        <h3 className="text-sm mb-4">Tagline</h3>
        <Link className="bg-orange-400 text-white px-2 py-1">Contact Us</Link>
      </div>
    </>
  );
};

export default Collaboration;
