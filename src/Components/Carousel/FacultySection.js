import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FacultySection = ({ teachers }) => {
    return (
        <div className="py-12 flex flex-col justify-center items-center bg-gray-100">


            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-[#212b60] border-b-4 inline-block pb-2 border-[#EB676A]">
                    Our Faculty
                </h1>
            </div>
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
