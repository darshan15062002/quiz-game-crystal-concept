import React, { useState } from 'react';
import hero from "../../assets/2312130-removebg-preview.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsYoutube } from 'react-icons/bs'
import { FaNewspaper, FaPaperPlane } from 'react-icons/fa'
import { GiNewspaper } from 'react-icons/gi'

import "./Home.css";

const Home = () => {
	const [index, setIndex] = useState(0);

	const handleNext = () => {
		setIndex(index + 3);
	};

	const handlePrev = () => {
		setIndex(index - 3);
	};

	var settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 426,
				settings: {
					slidesToShow: 1,

				}
			}

		]
	};
	return (
		<>
			<div className=" sm:px-20 pt-10 px-8 flex flex-col gap-5  relative">

				<div className=" flex justify-center items-center sm:flex-row flex-col-reverse  gap-2  ">
					<div className="flex justify-center items-start flex-col gap-2 sm:mx-16  z-20 ">
						<h1 className="text-start lg:text-3xl text-2xl text-black font-bold text-style   ">
							Unlock the Power of Learning
						</h1>
						<p className="text-start width-changed">
							Your Path to Knowledge, Anytime, Anywhere
						</p>
						<Link to="">
							<button className="btn btn-outline btn-success">Join US</button>
						</Link>
					</div>

					<img
						src={hero}
						className="  right-8   "
						alt="hero"
					/>

				</div>

				<div className='flex mb-10 flex-wrap justify-between  items-center gap-5 rounded-lg'>

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
										<img src="https://placeimg.com/192/192/people" alt="avatar" />
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
