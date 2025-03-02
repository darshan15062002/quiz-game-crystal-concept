import React from 'react';
import hero from "../../assets/hero1.png";
import ideabg2 from '../../assets/ideabg2.png';
import ideabg3 from '../../assets/ideabg3.png';
import ideabg4 from '../../assets/ideabg4.png';
import ideabg6 from '../../assets/ideabbg6.png';
import { BsYoutube } from 'react-icons/bs';
import { FaNewspaper, FaPaperPlane, FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { GiNewspaper } from 'react-icons/gi';

import { Feature } from '../../Components/Pages/Feature/Feature';

// Assume these imports are available in your project
// You would need to replace these with your actual image paths
import teacher1 from "../../assets/class/IMG_1.JPG";
import teacher2 from "../../assets/class/IMG_1.JPG";
import teacher3 from "../../assets/class/IMG_1.JPG";
import classroom1 from "../../assets/class/IMG_1.JPG";
import classroom2 from "../../assets/class/IMG_1.JPG";
import { FacilitiesShowcase } from '../../Components/Carousel/Carousel';
import FacultySection from '../../Components/Carousel/FacultySection';

const Home = () => {
    const featureData = [
        {
            ideabg: ideabg2,
            linkto: '/playquiz',
            title: 'Quizzes',
            description: "Explore our collection of quizzes designed to reinforce your understanding of various subjects. Whether you're studying for exams or just want to challenge yourself",
            buttonText: 'Get started',
            reversed: false
        },
        {
            ideabg: ideabg3,
            linkto: '/summarizer',
            title: 'Answer Summarizer',
            description: "Explore our answer summarizer feature designed to provide concise and clear summaries for your text or documents. Whether you're reviewing notes or analyzing articles, our tool can help you quickly grasp key information.",
            buttonText: 'Try Summarizer',
            reversed: true
        },
        {
            ideabg: ideabg4,
            linkto: '/search',
            title: 'YouTube Search',
            description: "Discover educational content on our platform with our YouTube search feature. Easily find videos related to your study topics or explore new subjects. Learning has never been this accessible and convenient.",
            buttonText: 'Search YouTube',
            reversed: false
        }
    ];

    const courses = [
        {
            title: "Class 5-10 (State Board)",
            description: "Comprehensive curriculum aligned with state board syllabus for grades 5-10."
        },
        {
            title: "Class 5-10 (CBSE Board)",
            description: "CBSE-focused classes with expert teachers and regular assessments."
        },
        {
            title: "Class 11-12 Science",
            description: "Specialized teaching for 11th and 12th grade science students."
        },
        {
            title: "JEE Preparation",
            description: "Intensive coaching for JEE Main and Advanced with concept-based learning."
        },
        {
            title: "NEET Preparation",
            description: "Comprehensive NEET preparation with biology, physics, and chemistry experts."
        }
    ];

    const teachers = [
        { name: "Rahul Sharma", image: teacher1, subject: "Physics", experience: "10+ years" },
        { name: "Priya Patel", image: teacher2, subject: "Chemistry", experience: "8 years" },
        { name: "Amit Kumar", image: teacher3, subject: "Mathematics", experience: "12 years" }
    ];

    return (
        <>
            <div className="pt-16 flex flex-col gap-6 justify-between items-center">
                {/* Original Hero Section - Kept as is */}
                <div className="sm:px-28 px-8 relative h-[60vh] md:h-full flex md:justify-between justify-center items-center sm:flex-row flex-col-reverse"
                    style={{ backgroundImage: `url(${ideabg6})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="flex z-10 mb-5 p-4 rounded-md justify-center w-full sm:w-1/2 items-start flex-col gap-y-2 ">
                        <h1 className="text-start lg:text-5xl sm:font-extrabold text-xl font-bold text-black font-sans">
                            Empower Your Mind with Knowledge
                        </h1>
                        <p className="text-start text-gray-600 text-sm">
                            Embark on a Journey to Learning Excellence, Unleashing Possibilities Anytime, Anywhere.
                        </p>
                        <div className="flex gap-4">
                            <a href="/login" className="relative items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-[#EB676A] rounded-full hover:bg-white group">
                                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#EB676A]">Learn more</span>
                            </a>
                            {/* Added Apply Now Button that redirects to WhatsApp */}
                            <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer" className="relative items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-[#25D366] rounded-full hover:bg-white group">
                                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#25D366] flex items-center"><FaWhatsapp className="mr-2" /> Apply Now</span>
                            </a>
                        </div>
                    </div>
                    <img src={hero} className='sm:h-[90vh] h-full hidden sm:block absolute md:relative ' alt="hero" />
                </div>

                <h1 className="text-start lg:text-4xl border-[#212b60] border-b-4 sm:font-extrabold text-3xl font-bold text-black font-sans mb-8">
    Our Courses
</h1>

<div className="sm:px-28 px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
    {courses.map((course, index) => {
        const whatsappMessage = encodeURIComponent(
            `Hello, I'm interested in joining the "${course.title}" course. Can you please provide more details?`
        );
        const whatsappNumber = "918830979037"; // Replace with your WhatsApp number
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        return (
            <div 
                key={index} 
                className="bg-gradient-to-br from-[#212b60] to-[#EB676A] shadow-xl rounded-lg p-6 hover:scale-105 transition-transform duration-300 text-white"
            >
                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <p className="text-sm mb-5">{course.description}</p>
                <div className="flex justify-between items-center">
                    <a 
                        href={whatsappLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white px-5 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-opacity-90 transition"
                    >
                        <FaWhatsapp size={20} />
                        Join Now
                    </a>
                    <a 
                        href="#" 
                        className="text-white underline text-sm hover:text-gray-300 transition"
                    >
                        Learn more →
                    </a>
                </div>
            </div>
        );
    })}
</div>

              

                <FacultySection teachers={teachers}/>

 
                <h1 className="text-start lg:text-4xl border-[#212b60] border-b-2 sm:font-extrabold text-3xl font-bold text-black font-sans">
                    Join Us
                </h1>
                <div className='sm:px-28 px-8 py-5 flex mb-10 w-full flex-wrap gap-y-5 justify-between items-center'>
                    <a className="h-24 w-32 sm:w-52 rounded-lg bg-[#F9C2DD] shadow-lg p-2" href='https://www.youtube.com/channel/UC3_NJf886Au6pj59s2I1Bvg'>
                        <BsYoutube color='#F662AA' size={35} />
                        <h1 className='text-gray-700 text-sm font-bold'>Youtube</h1>
                        <span className='text-xs'>Join Youtube</span>
                    </a>
                    <a className="h-24 w-32 sm:w-52 rounded-lg bg-[#A9EDEF] shadow-lg p-2" href='https://t.me/crystalconcept_shubhamchatrawat'>
                        <FaPaperPlane color='#56CEF1' size={35} />
                        <h1 className='text-gray-700 text-sm font-bold'>Telegram</h1>
                        <span className='text-xs'>Join Telegram</span>
                    </a>
                    <a className="h-24 w-32 sm:w-52 rounded-lg bg-[#DED7FC] shadow-lg p-2" href='https://www.youtube.com/@crystalconceptshubham/playlists'>
                        <GiNewspaper color='#9581FC' size={35} />
                        <h1 className='text-gray-700 text-xs font-bold'>Exam preparation</h1>
                        <span className='text-xs'>Join</span>
                    </a>
                    <a className="h-24 w-32 sm:w-52 rounded-lg bg-[#f5c48c] shadow-lg p-2" href='https://www.youtube.com/@crystalconceptshubham/playlists'>
                        <FaNewspaper color='#F4A64A' size={35} />
                        <h1 className='text-gray-700 text-xs font-bold'>Exam preparation</h1>
                        <span className='text-xs'>Join </span>
                    </a>
                    {/* Added Instagram link */}
                    <a className="h-24 w-32 sm:w-52 rounded-lg bg-[#C13584] shadow-lg p-2" href='https://instagram.com/crystalconcept'>
                        <FaInstagram color='#FFFFFF' size={35} />
                        <h1 className='text-gray-100 text-sm font-bold'>Instagram</h1>
                        <span className='text-gray-100 text-xs'>Follow Us</span>
                    </a>
                    {/* Added WhatsApp link */}
                    <a 
    className="h-24 w-32 sm:w-52 rounded-lg bg-[#25D366] shadow-lg p-2 flex flex-col items-center justify-center gap-2" 
    href="https://wa.me/918830979037" 
    target="_blank" 
    rel="noopener noreferrer"
>
    <FaWhatsapp color="#FFFFFF" size={35} />
    <h1 className="text-gray-100 text-sm font-bold">WhatsApp</h1>
    <span className="text-gray-100 text-xs">Chat With Us</span>
</a>
                </div>

                {/* Original Features Section - Kept as is */}
                <h1 className="text-start lg:text-4xl border-[#212b60] border-b-2 sm:font-extrabold text-3xl font-bold text-black font-sans">
                    Features
                </h1>
                <section className="sm:px-28 px-8 py-5 h-full flex-col gap-y-20 flex w-full justify-between items-center">
                    {
                        featureData?.map((data) => (
                            <Feature ideabg={data.ideabg} title={data.title} reversed={data.reversed} linkto={data.linkto} description={data.description} buttonText={data.buttonText} />
                        ))
                    }
                </section>

             <FacilitiesShowcase title="Our Facilities"/>
          
             <FacilitiesShowcase title="Price Distribution" />
     


                {/* Contact Us Section - New Section */}
                <h1 className="text-start lg:text-4xl border-[#212b60] border-b-2 sm:font-extrabold text-3xl font-bold text-black font-sans">
                    Contact Us
                </h1>
                <div className="sm:px-28 px-8 py-5 flex flex-col md:flex-row gap-6 w-full">
                    <div className="md:w-1/2">
                        <form className="bg-white shadow-lg rounded-lg p-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const name = document.getElementById('name').value;
                            const email = document.getElementById('email').value;
                            const phone = document.getElementById('phone').value;
                            const message = document.getElementById('message').value;
                    
                            const whatsappMessage = `Hello, my name is ${name}.%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
                            const phoneNumber = "918830979037"; // Add your WhatsApp number here (with country code)
                            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
                    
                            window.open(whatsappUrl, '_blank')}}
                            >
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#EB676A]" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#EB676A]" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#EB676A]" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#EB676A]"></textarea>
                            </div>
                            <button type="submit" className="bg-[#EB676A] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-white shadow-lg rounded-lg p-6 h-full">
                            <div className="flex items-start mb-6">
                                <FaMapMarkerAlt className="text-[#EB676A] text-xl mt-1 mr-4" />
                                <div>
                                    <h3 className="text-lg font-bold text-[#212b60]">Our Location</h3>
                                    <p className="text-gray-600">Anandi nager near shukhla compund , Boiser-401501</p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-[#212b60] mb-3">Find Us On Map</h3>
                                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded">
                                <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1876.9474751746013!2d72.74940319229458!3d19.802050878549508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71f574e1a301d%3A0xbcba4a723177377c!2sCrystal%20Concept%20Classes!5e0!3m2!1sen!2sin!4v1740901721818!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Crystal Concept Classes Location"
            allowFullScreen
        />
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>

                {/* Original Footer - Modified slightly */}
                <footer className="footer footer-center p-8 bg-[#20284c] text-white w-full">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Crystal Concept</h3>
                            <p>
                                Empowering students with knowledge and skills to excel in academics and competitive exams since 2010.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-[#EB676A]">Home</a></li>
                                <li><a href="#" className="hover:text-[#EB676A]">Courses</a></li>
                                <li><a href="#" className="hover:text-[#EB676A]">Teachers</a></li>
                                <li><a href="#" className="hover:text-[#EB676A]">Features</a></li>
                                <li><a href="#" className="hover:text-[#EB676A]">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">We're on YouTube</h3>
                            <p className="mb-4">Join our 30K+ community for free educational content</p>
                            <a href="https://www.youtube.com/channel/UC3_NJf886Au6pj59s2I1Bvg" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full inline-flex items-center">
                                <BsYoutube className="mr-2" /> Subscribe Now
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-gray-700">
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by CC</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;