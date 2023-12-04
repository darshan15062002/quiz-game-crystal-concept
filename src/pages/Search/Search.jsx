import React, { useState } from 'react'

import axios from 'axios'
import boy from '../../assets/cute-boy-explorer-using-a-magnifying-glass-free-vector-removebg-preview.png'
export const Search = () => {
    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])

    const handleSearch = async (e) => {

        e.preventDefault()
        const searching = async () => {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?channelId=UC3_NJf886Au6pj59s2I1Bvg&maxResults=16&q=${search}&type=video&key=AIzaSyCnY0bZ1c68Yw4f2s37QE-Xr-rRr5Kkvlc`)

            setResult(res?.data.items)
        }
        search && searching()

    }

    const handleVideoClick = (videoId) => {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    };

    return (
        <div className="mt-28 w-full sm:px-20 px-10 ">
            <div className=" w-full  ">
                <form className=' mb-10  w-full mx-2 flex justify-center items-center   '>

                    <div className="relative sm:w-[50%] w-full ">
                        <input type="search" onChange={(e) => setSearch(e.target.value)} value={search} id=" default-search" className=" relative  block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search here....." required />
                        <button
                            onClick={handleSearch}
                            className="absolute top-1 right-2 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span className=" px-2.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Search
                            </span>
                        </button>
                    </div>
                </form>
                <div className="flex mb-10 flex-wrap sm:justify-between justify-center gap-y-8">
                    {result.length !== 0 ? result.map((item) => (
                        <div
                            key={item.etag}

                            className='cursor-pointer '
                        >


                            <iframe
                                onClick={() => handleVideoClick(item.id.videoId)} className='rounded-lg h-auto max-w-full shadow-sm hover:scale-105 sm:w-[250px] w-full transition-all duration-500' height="150" src={`https://www.youtube.com/embed/${item.id.videoId}?si=s0iF-vG4Wli1-kcK`} title='vd' />

                        </div>
                    )) : (<div className="flex flex-col w-full justify-center items-center">
                        <div className="w-full">
                            <h1 className='font-bold text-black text-3xl font-sans mb-2 '>Youtube Search</h1>
                            <p className='text-gray-600'>Unleash the Power of Curated Learning! 🚀 Our YouTube Search feature puts a world of knowledge at your fingertips. Enter your topic of interest, hit search, and discover educational videos tailored just for you. Enhance your learning experience with instant access to diverse content on a wide range of subjects. Learning made easy, right here on our platform. Start exploring now!</p>
                        </div>
                        <img className='h-[300px]' src={boy} alt="boy" />
                    </div>
                    )}

                </div>
            </div>

        </div>

    )
}
