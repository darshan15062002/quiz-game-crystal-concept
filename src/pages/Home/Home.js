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

import "./Home.css";
import { Feature } from '../../Components/Pages/Feature/Feature';

const Home = () => {

	return (
		<>
			<div className="pt-16  flex flex-col gap-6 justify-between items-center  ">


				<div
					className="sm:px-28 px-8 relative h-[60vh] md:h-full  flex md:justify-between justify-start items-center sm:flex-row flex-col-reverse"
					style={{ backgroundImage: `url(${ideabg6})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}
				>
					<div className="flex z-10 mb-5  bg-slate-100/60 p-4  rounded-md justify-center w-full items-start flex-col gap-y-0.5 ">
						<h1 className="text-start lg:text-5xl sm:font-extrabold text-xl font-bold text-black font-sans">
							Empower Your Mind with Knowledge
						</h1>
						<p className="text-start text-gray-600 text-sm">
							Embark on a Journey to Learning Excellence, Unleashing Possibilities Anytime, Anywhere.
						</p>

						<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
								Learn more
							</span>
						</button>


					</div>

					<img
						src={hero}
						className='sm:h-[90vh] h-full  absolute md:relative '
						alt="h/ero"
					/>

				</div>
				<h1 className="text-start lg:text-4xl  border-blue-500 border-b-2 sm:font-extrabold text-3xl font-bold text-black font-sans">
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




				<h1 className="text-start lg:text-4xl  border-blue-500 border-b-2 sm:font-extrabold text-3xl font-bold text-black font-sans">
					Features
				</h1>
				<section className=" bg-slate-100 sm:px-28 px-8 py-5 h-full flex-col gap-y-20     flex  w-full justify-between items-center">

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














				<footer className="footer footer-center p-4 bg-base-300 text-base-content">
					<aside>
						<p>Copyright © 2023 - All right reserved by CC </p>
					</aside>
				</footer>

			</div>

			{/* event */}

			{/* <div className="conatiner h-[500px] mb-5 ">
				<div className='border-2 px-2 py-3 mx-3 mb-6 h-[200px] rectangle-box-shadow' >

					<div className='flex  justify-around items-center p-6 my-14 bg-white h-[300px] w-[80%] mx-auto rectangle-box-shadow'>
						<Slider {...settings}>
							{Array(6).fill(1).map((e, index) =>

								<div className="content-box max-w-[90%]  m-4 p-6 border-2 text-gray-600 h-fit" key={index}>
									<h2 className="font-bold border-b-2 pb-2 uppercase text-xl leading-none  w-24 text-style">
										<div>Event</div>
										<div>Name</div>
									</h2>
									<p className="font-semibold lg:text-base text-sm w-[200px] h-[100px] ">description</p>
									<p className="text-xs border-b-2 pt-2 font-semibold uppercase w-24 text-style">
										Read More
									</p>
								</div>
							)}


						</Slider>
					</div>
				</div>
			</div> */}


			{/* wining section */}
			{/* <div className="conatiner h-[500px] mb-5 ">
				<div className='border-2 px-2 py-3 mx-3 mb-6 h-[200px] rectangle-box-shadow'>
					<h2 className="text-3xl font-semibold text-gray-700 
					uppercase mt-[25px] ml-[50px] text-style">
						Recent Winners
					</h2>
					<div className='flex  justify-around items-center p-6 my-10 bg-white h-[300px] w-[80%] mx-auto rectangle-box-shadow'>

						<Slider {...settings}>
							{Array(6).fill(1).map((e, index) =>
								<div className="!flex justify-between max-w-[90%]  m-4 p-6 max-[321px]:p-2 border-2 
								 text-gray-600 h-[250px]" key={index}>
									<div className='flex flex-col '>
										<h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24 text-style">
											Name
										</h2>
										<p className="font-semibold pt-2 lg:text-base text-sm">
											description
										</p>
									</div>
									<div className="avatar w-20  rounded-full h-fit overflow-hidden ">
										<img src="https://placeimg.com/192/192/people" alt="a/vatar" />
									</div>
								</div>
							)}
						</Slider>
					</div>
					<div className='flex items-start flex-col lg:flex-row justify-center p-16 content-center container3'>
					</div>
				</div>
			</div> */}


			{/* Sponsors */}

			{/* <div className="conatiner h-[600px] max-[769px]:h-[1100px] mb-5 ">
				<div className='border-2 px-2 py-3 mx-3 mb-6 h-[200px] rectangle-box-shadow'>
					<h2 className="text-3xl font-semibold text-gray-700 
					uppercase mt-[25px] ml-[50px] text-style">
						Sponsors
					</h2>
					<div className='flex flex-col lg:flex-row  justify-around items-center content-center
					 container2 '>
						<div className="cursor-pointer transition duration-500 hover:scale-110 card1  "></div>
						<div className="cursor-pointer transition duration-500  hover:scale-110 card1"></div>
						<div className="cursor-pointer transition duration-500  hover:scale-110 card1"></div>
					</div>
					<div className='flex items-center flex-col lg:flex-row justify-center p-16 content-center container3'>
						<div className="cursor-pointer transition duration-500 hover:scale-110 card2"></div>
						<div className="cursor-pointer transition duration-500 hover:scale-110 card2"></div>
					</div>
				</div>
				<div className="border-2 p-6 mx-6 mb-6">
					<h2 className="text-3xl font-semibold text-gray-700 uppercase">Volunteer</h2>
					<div className="flex flex-col lg:flex-row justify-around items-center gap-4 border-2 py-6 px-12 m-6">
						{index > 0 && (
							<button className="mr-3 text-gray-700 hover:text-gray-900 focus:outline-none focus:shadow-outline" onClick={handlePrev}>&lt;</button>
						)}
						<div>
							<div className="w-full border-2">
								<div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between"></div>
							</div>
							<p className="text-sm text-gray-500 lg:px-8 py-4">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Architecto eius expedita eaque ut officia{" "}
							</p>
						</div>
						<div>
							<div className="w-full border-2">
								<div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between"></div>
							</div>
							<p className="text-sm text-gray-500 lg:px-8 py-4">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Architecto eius expedita eaque ut officia{" "}
							</p>
						</div>
						<div>
							<div className="w-full border-2">
								<div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between"></div>
							</div>
							<p className="text-sm text-gray-500 lg:px-8 py-4">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Architecto eius expedita eaque ut officia{" "}
							</p>
						</div>
						{index + 3 && (
							<button className="ml-3 text-gray-700 hover:text-gray-900 focus:outline-none focus:shadow-outline" onClick={handleNext}>&gt;</button>
						)}
					</div>
				</div>
			</div> */}


			{/* volunteer */}

			{/* <div className="conatiner h-[500px] mb-5 ">
				<div className='border-2 px-2 py-3 mx-3 mb-6 h-[200px] rectangle-box-shadow'>
					<h2 className="text-3xl font-semibold text-gray-700 
					uppercase mt-[25px] ml-[50px] text-style">
						Volunteer
					</h2>
					<div className='flex  justify-around items-center p-6 my-10 bg-white h-[350px] w-[80%] mx-auto rectangle-box-shadow'>


						<Slider {...settings}>
							{Array(6).fill(1).map((e, index) =>
								<div className="!flex flex-col items-center max-w-[90%]  h-fit" key={index}>
									<div className=" m-4 p-6 border-[1px] border-solid  border-[#707070]
								  w-[200px] h-[200px] max-[376px]:w-[150px] max-[376px]:h-[150px]">

									</div>
									<div className='text-center text-[13px] text-[#707070]'>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									</div>

								</div>
							)}
						</Slider>
					</div>
				</div>
			</div> */}

		</>
	);
};

export default Home;
