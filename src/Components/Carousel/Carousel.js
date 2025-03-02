import React, { useState, useEffect } from "react";


import image1  from "../../assets/class/IMG_1.JPG"
import image2  from "../../assets/class/IMG_2.JPG"
import image3  from "../../assets/class/IMG_3.JPG"
import image4  from "../../assets/class/IMG_4.JPG"
import image5  from "../../assets/class/IMG_5.JPG"
import image6  from "../../assets/class/IMG_6.JPG"
import image7  from "../../assets/class/IMG_7.JPG"
import image8  from "../../assets/class/IMG_8.JPG"

import imagep1  from "../../assets/class/price/IMG_1096.JPG"
import imagep2  from "../../assets/class/price/IMG_1099.JPG"
import imagep3  from "../../assets/class/price/IMG_1101.JPG"
import imagep4  from "../../assets/class/price/IMG_1103.JPG"
import imagep5  from "../../assets/class/price/IMG_1105.JPG"
import imagep6  from "../../assets/class/price/IMG_1108.JPG"
import imagep7  from "../../assets/class/price/IMG_1110.JPG"
import imagep8  from "../../assets/class/price/IMG_1112.JPG"
import imagep9  from "../../assets/class/price/IMG_1114.JPG"
import imagep10  from "../../assets/class/price/IMG_1116.JPG"
import imagep11  from "../../assets/class/price/IMG_1118.JPG"
import imagep12  from "../../assets/class/price/IMG_1119.JPG"
import imagep13  from "../../assets/class/price/IMG_1123.JPG"
import imagep14  from "../../assets/class/price/IMG_1125.JPG"
import imagep15 from "../../assets/class/price/IMG_1126.JPG"
import imagep16  from "../../assets/class/price/IMG_1129.JPG"
import imagep17  from "../../assets/class/price/IMG_1133.JPG"
import imagep18 from "../../assets/class/price/IMG_1135.JPG"
import imagep19 from "../../assets/class/price/IMG_1138.JPG"
import imagep20  from "../../assets/class/price/IMG_1141.JPG"
import imagep21  from "../../assets/class/price/IMG_1144.JPG"
import imagep22  from "../../assets/class/price/IMG_1146.JPG"
import imagep23  from "../../assets/class/price/IMG_1155.JPG"
import imagep24  from "../../assets/class/price/IMG_1156.JPG"
import imagep25  from "../../assets/class/price/IMG_1157.JPG"
import imagep26  from "../../assets/class/price/IMG_1159.JPG"
import imagep27  from "../../assets/class/price/IMG_1171.JPG"
import imagep28  from "../../assets/class/price/IMG_1173.JPG"
import imagep29  from "../../assets/class/price/IMG_1175.JPG"
import imagep30  from "../../assets/class/price/IMG_1177.JPG"
import imagep31 from "../../assets/class/price/IMG_1178.JPG"
import imagep32  from "../../assets/class/price/IMG_1183.JPG"






export const FacilitiesShowcase = ({title}) => {
  // Sample facility images - replace with your actual imports
  const facilityImages = [
    { src: image1, alt: "Modern Classroom", title: "Modern Classrooms", description: "Well-equipped classrooms with digital learning tools for enhanced learning experience." },
    { src: image2, alt: "Library", title: "Resource Library", description: "Extensive collection of books and study materials for all courses and competitive exams." },
    { src: image4, alt: "Computer Laboratory", title: "Computer Laboratory", description: "State-of-the-art computer lab with latest software and hardware configurations." },
    { src: image5, alt: "Science Laboratory", title: "Science Laboratory", description: "Fully equipped science lab for practical experiments and hands-on learning." },
    { src: image6, alt: "Sports Facilities", title: "Sports Facilities", description: "Dedicated sports area for physical activities and all-round development." },
    { src: image7, alt: "Study Hall", title: "Quiet Study Hall", description: "Peaceful environment for focused studies and group discussions." },
    { src: image8, alt: "Cafeteria", title: "Cafeteria", description: "Clean and hygienic cafeteria offering nutritious refreshments." },
    { src: image3, alt: "Auditorium", title: "Multipurpose Auditorium", description: "Spacious auditorium for events, seminars and interactive sessions." },
    // { src: image10, alt: "Outdoor Learning Space", title: "Outdoor Learning Spaces", description: "Green spaces for outdoor activities and alternative learning environments." },
    // { src: image11, alt: "Counseling Room", title: "Counseling Center", description: "Private spaces for academic and career counseling sessions." }
  
];

const priceDistributionImage =[
    { src: imagep1, alt: "Modern Classroom", title: "Modern Classrooms", description: "Well-equipped classrooms with digital learning tools for enhanced learning experience." },
    { src: imagep2, alt: "Library", title: "Resource Library", description: "Extensive collection of books and study materials for all courses and competitive exams." },
    { src: imagep4, alt: "Computer Laboratory", title: "Computer Laboratory", description: "State-of-the-art computer lab with latest software and hardware configurations." },
    { src: imagep5, alt: "Science Laboratory", title: "Science Laboratory", description: "Fully equipped science lab for practical experiments and hands-on learning." },
    { src: imagep6, alt: "Sports Facilities", title: "Sports Facilities", description: "Dedicated sports area for physical activities and all-round development." },
    { src: imagep7, alt: "Study Hall", title: "Quiet Study Hall", description: "Peaceful environment for focused studies and group discussions." },
    { src: imagep8, alt: "Cafeteria", title: "Cafeteria", description: "Clean and hygienic cafeteria offering nutritious refreshments." },
    { src: imagep3, alt: "Auditorium", title: "Multipurpose Auditorium", description: "Spacious auditorium for events, seminars and interactive sessions." },
    { src: imagep9, alt: "Modern Classroom", title: "Modern Classrooms", description: "Well-equipped classrooms with digital learning tools for enhanced learning experience." },
    { src: imagep10, alt: "Library", title: "Resource Library", description: "Extensive collection of books and study materials for all courses and competitive exams." },
    { src: imagep12, alt: "Computer Laboratory", title: "Computer Laboratory", description: "State-of-the-art computer lab with latest software and hardware configurations." },
    { src: imagep13, alt: "Science Laboratory", title: "Science Laboratory", description: "Fully equipped science lab for practical experiments and hands-on learning." },
    { src: imagep14, alt: "Sports Facilities", title: "Sports Facilities", description: "Dedicated sports area for physical activities and all-round development." },
    { src: imagep15, alt: "Study Hall", title: "Quiet Study Hall", description: "Peaceful environment for focused studies and group discussions." },
    { src: imagep16, alt: "Cafeteria", title: "Cafeteria", description: "Clean and hygienic cafeteria offering nutritious refreshments." },
    { src: imagep11, alt: "Auditorium", title: "Multipurpose Auditorium", description: "Spacious auditorium for events, seminars and interactive sessions." },
    { src: imagep12, alt: "Modern Classroom", title: "Modern Classrooms", description: "Well-equipped classrooms with digital learning tools for enhanced learning experience." },
    { src: imagep13, alt: "Library", title: "Resource Library", description: "Extensive collection of books and study materials for all courses and competitive exams." },
    { src: imagep14, alt: "Computer Laboratory", title: "Computer Laboratory", description: "State-of-the-art computer lab with latest software and hardware configurations." },
    { src: imagep15, alt: "Science Laboratory", title: "Science Laboratory", description: "Fully equipped science lab for practical experiments and hands-on learning." },
    { src: imagep16, alt: "Sports Facilities", title: "Sports Facilities", description: "Dedicated sports area for physical activities and all-round development." },
    { src: imagep17, alt: "Study Hall", title: "Quiet Study Hall", description: "Peaceful environment for focused studies and group discussions." },
    { src: imagep18, alt: "Cafeteria", title: "Cafeteria", description: "Clean and hygienic cafeteria offering nutritious refreshments." },
    { src: imagep13, alt: "Auditorium", title: "Multipurpose Auditorium", description: "Spacious auditorium for events, seminars and interactive sessions." },
    { src: imagep19, alt: "Modern Classroom", title: "Modern Classrooms", description: "Well-equipped classrooms with digital learning tools for enhanced learning experience." },
    { src: imagep20, alt: "Library", title: "Resource Library", description: "Extensive collection of books and study materials for all courses and competitive exams." },
    { src: imagep22, alt: "Computer Laboratory", title: "Computer Laboratory", description: "State-of-the-art computer lab with latest software and hardware configurations." },
    { src: imagep23, alt: "Science Laboratory", title: "Science Laboratory", description: "Fully equipped science lab for practical experiments and hands-on learning." },
    { src: imagep24, alt: "Sports Facilities", title: "Sports Facilities", description: "Dedicated sports area for physical activities and all-round development." },
    { src: imagep25, alt: "Study Hall", title: "Quiet Study Hall", description: "Peaceful environment for focused studies and group discussions." },
    { src: imagep26, alt: "Cafeteria", title: "Cafeteria", description: "Clean and hygienic cafeteria offering nutritious refreshments." },
    { src: imagep21, alt: "Auditorium", title: "Multipurpose Auditorium", description: "Spacious auditorium for events, seminars and interactive sessions." },
    { src: imagep27, alt: "Modern Classroom", title: "Modern Classrooms", description: "Well-equipped classrooms with digital learning tools for enhanced learning experience." },
    { src: imagep28, alt: "Library", title: "Resource Library", description: "Extensive collection of books and study materials for all courses and competitive exams." },
    { src: imagep29, alt: "Computer Laboratory", title: "Computer Laboratory", description: "State-of-the-art computer lab with latest software and hardware configurations." },
    { src: imagep30, alt: "Science Laboratory", title: "Science Laboratory", description: "Fully equipped science lab for practical experiments and hands-on learning." },
    { src: imagep31, alt: "Sports Facilities", title: "Sports Facilities", description: "Dedicated sports area for physical activities and all-round development." },
    { src: imagep32, alt: "Study Hall", title: "Quiet Study Hall", description: "Peaceful environment for focused studies and group discussions." },
   
]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Number of cards to show at once based on screen size
  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }
    return 3; // Default for SSR
  };
  
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === facilityImages.length - visibleCards 
            ? 0 
            : prevIndex + 1
        );
      }, 3000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, facilityImages.length, visibleCards]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? facilityImages.length - visibleCards 
        : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === facilityImages.length - visibleCards 
        ? 0 
        : prevIndex + 1
    );
  };

  return (
    <div className="py-10 w-full p-10 flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-start lg:text-4xl border-[#212b60] border-b-2 sm:font-extrabold text-3xl font-bold text-black font-sans mb-8">
       {title}
      </h1>
      
      <div className="relative overflow-hidden">
        {/* Slider Controls */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 w-full flex justify-between px-4">
          <button 
            onClick={goToPrevious} 
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            className="bg-white/80 hover:bg-white text-[#212b60] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext} 
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            className="bg-white/80 hover:bg-white text-[#212b60] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Slider Track */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {title==="Our Facilities"? facilityImages?.map((image, index) => (
            <div 
              key={index}
              className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3 transition-opacity duration-500 ${
                index >= currentIndex && index < currentIndex + visibleCards
                  ? "opacity-100" 
                  : "opacity-0"
              }`}
              style={{ transform: `scale(${index === currentIndex + Math.floor(visibleCards / 2) ? 1.05 : 1})` }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-2">
                <div className="relative overflow-hidden group">
                  {/* Replace with your actual image component and path */}
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold">{image.title}</h3>
                    </div>
                  </div> */}
                </div>
                {/* <div className="p-6">
                  <h3 className="text-xl font-bold text-[#212b60] mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div> */}
              </div>
            </div>
          )): priceDistributionImage?.map((image, index) => (
            <div 
              key={index}
              className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3 transition-opacity duration-500 ${
                index >= currentIndex && index < currentIndex + visibleCards
                  ? "opacity-100" 
                  : "opacity-0"
              }`}
              style={{ transform: `scale(${index === currentIndex + Math.floor(visibleCards / 2) ? 1.05 : 1})` }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-2">
                <div className="relative overflow-hidden group">
                  {/* Replace with your actual image component and path */}
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    
                    className="w-full   h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold">{image.title}</h3>
                    </div>
                  </div> */}
                </div>
                {/* <div className="p-6">
                  <h3 className="text-xl font-bold text-[#212b60] mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div> */}
              </div>
            </div>
          ))
          }
        </div>
      </div>
      
      {/* Dot navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: (title==="Our Facilities"? facilityImages.length : priceDistributionImage.length) - visibleCards + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-[#212b60] w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};