import React from 'react';
import hero from "../../assets/hero1.png";
import ideabg2 from '../../assets/ideabg2.png'
import ideabg3 from '../../assets/ideabg3.png'
import ideabg4 from '../../assets/ideabg4.png'
import ideabg6 from '../../assets/ideabbg6.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsYoutube } from 'react-icons/bs'
import { FaNewspaper, FaPaperPlane } from 'react-icons/fa'
import { GiNewspaper } from 'react-icons/gi'

import { Feature } from '../../Components/Pages/Feature/Feature';

const Home = () => {

	return (
		<>
			<div className="pt-16  flex flex-col gap-6 justify-between items-center  ">


				<div
					className="sm:px-28 px-8 relative h-[60vh] md:h-full  flex md:justify-between justify-center items-center sm:flex-row flex-col-reverse"
					style={{ backgroundImage: `url(${ideabg6})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}
				>
					<div className="flex z-10 mb-5   p-4  rounded-md justify-center w-full sm:w-1/2 items-start flex-col gap-y-2 ">
						<h1 className="text-start lg:text-5xl sm:font-extrabold text-xl font-bold text-black font-sans">
							Empower Your Mind with Knowledge
						</h1>
						<p className="text-start text-gray-600 text-sm">
							Embark on a Journey to Learning Excellence, Unleashing Possibilities Anytime, Anywhere.
						</p>


						<a href="/login" class="relative items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-[#EB676A] rounded-full hover:bg-white group">
							<span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
							<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#EB676A]">Learn more</span>
						</a>


					</div>

					<img
						src={hero}
						className='sm:h-[90vh] h-full hidden sm:block  absolute md:relative '
						alt="h/ero"
					/>

				</div>
				<h1 className="text-start lg:text-4xl  border-[#212b60] border-b-2 sm:font-extrabold text-3xl font-bold text-black font-sans">
					Join Us
				</h1>

				<div className=' sm:px-28 px-8 py-5 flex mb-10 w-full flex-wrap gap-y-5 justify-between  items-center  '
				>

					<a className="h-24 w-32 sm:w-52 rounded-lg bg-[#F9C2DD] shadow-lg p-2"
						href='https://www.youtube.com/channel/UC3_NJf886Au6pj59s2I1Bvg' >
						<BsYoutube color='#F662AA' size={35} />
						<h1 className='text-gray-700 text-sm font-bold'>Youtube</h1>
						<span className='text-xs'>Join Youtube</span>
					</a>
					<a className="h-24 w-32 sm:w-52 rounded-lg  bg-[#A9EDEF] shadow-lg p-2"
						href='https://t.me/crystalconcept_shubhamchatrawat'>
						<FaPaperPlane color='#56CEF1' size={35} />
						<h1 className='text-gray-700 text-sm font-bold'>Telegram</h1>
						<span className='text-xs'>Join Telegram</span>
					</a>
					<a className="h-24 w-32 sm:w-52 rounded-lg  bg-[#DED7FC] shadow-lg p-2"
						href='https://www.youtube.com/@crystalconceptshubham/playlists'>
						<GiNewspaper color='#9581FC' size={35} />
						<h1 className='text-gray-700 text-xs font-bold'>Exam preparation</h1>
						<span className='text-xs'>Join</span>
					</a>
					<a className="h-24 w-32 sm:w-52 rounded-lg  bg-[#f5c48c] shadow-lg p-2"
						href='https://www.youtube.com/@crystalconceptshubham/playlists'>
						<FaNewspaper color='#F4A64A' size={35} />
						<h1 className='text-gray-700 text-xs font-bold'>Exam preparation</h1>
						<span className='text-xs'>Join </span>
					</a>

				</div>




				<h1 className="text-start lg:text-4xl  border-[#212b60] border-b-2 sm:font-extrabold text-3xl font-bold text-black font-sans">
					Features
				</h1>
				<section className="  sm:px-28 px-8 py-5 h-full flex-col gap-y-20     flex  w-full justify-between items-center">

					<Feature
						ideabg={ideabg2}
						linkto={'/playquiz'}
						title="Quizzes"
						description="Explore our collection of quizzes designed to reinforce your understanding of various subjects.
						Whether you're studying for exams or just want to challenge yourself"
						buttonText="Get started"
					/>

					<Feature
						ideabg={ideabg3}
						linkto={'/summarizer'}
						reversed="true"
						title="Answer Summarizer"
						description="Explore our answer summarizer feature designed to provide concise and clear summaries for your text or documents. Whether you're reviewing notes or analyzing articles, our tool can help you quickly grasp key information."
						buttonText="Try Summarizer"
					/>
					<Feature
						ideabg={ideabg4}
						linkto={'/search'}
						title="YouTube Search"
						description="Discover educational content on our platform with our YouTube search feature. Easily find videos related to your study topics or explore new subjects. Learning has never been this accessible and convenient."
						buttonText="Search YouTube"
					/>
				</section>














				<footer className="footer footer-center p-4 bg-[#20284c] text-base-content">
					<aside>
						<p>Copyright © 2023 - All right reserved by CC </p>
					</aside>
				</footer>

			</div>



		</>
	);
};

export default Home;
