import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FacultySection = ({ teachers }) => {
    return (
        <div className="py-12 flex flex-col justify-center items-center bg-gray-100">
            {/* Title */}
            <h1 className="text-start lg:text-4xl border-[#212b60] border-b-2 sm:font-extrabold text-3xl font-bold text-black font-sans">
                              Our Faculty
                          </h1>
                          <div className="sm:px-28 px-8 py-5 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                              {teachers.map((teacher, index) => (
                                  <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                      <img src={teacher.image} alt={teacher.name} className="w-full h-64 object-cover" />
                                      <div className="p-6">
                                          <h3 className="text-xl font-bold text-[#212b60]">{teacher.name}</h3>
                                          <p className="text-[#EB676A] font-medium">{teacher.subject}</p>
                                          <p className="text-gray-600">Experience: {teacher.experience}</p>
                                      </div>
                                  </div>
                                  
                              ))}
                          </div>
          
        </div>
    );
};

export default FacultySection;
