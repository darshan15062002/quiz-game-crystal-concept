import React, { useContext } from 'react';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { userLogout } from '../../api/authApi';

const UserProfile = () => {
    const navigate = useNavigate()
    const { currentUser } = useContext(AuthContext)
    const handleLogout = () => {
        userLogout().then((data) => {
            if (data.success) {
                alert(data.message)
                navigate("/")
            }

        })
    }
    return (
        <>
            <div className="lg:px-36 pt-24 px-6 ">
                <div className='flex justify-start items-center text-gray-500 text-sm font-semibold underline'>
                    <BsFillCaretLeftFill></BsFillCaretLeftFill>
                    <Link to='/'>Back</Link>
                </div>
                <h2 className='text-3xl font-semibold mb-5 text-gray-700'>User Profile</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:p-6 sm:m-6 p-2 m-4'>
                <form className='flex flex-col lg:flex-row items-start justify-center border-2 p-6'>
                    <div className="avatar mr-5 mb-5 lg:mb-0 flex">
                        <div className="w-24 rounded-full">
                            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt='' />
                        </div>
                        <FaPen className='text-gray-500'></FaPen>
                    </div>
                    <div>
                        <input type="text" placeholder='Name' value={currentUser.user.name} className='w-full p-3 input input-bordered shadow-md mb-2 text-black ' />
                        <input type="email" placeholder='Email' value={currentUser.user.email} className='w-full p-3 input input-bordered shadow-md mb-2 text-black' />
                        <input type="number" placeholder='Phone no.' value={currentUser.user.phone} className='w-full p-3 input input-bordered shadow-md mb-2 text-black' />


                        <select name="" id="" className='w-full p-3 shadow-md mb-2 text-gray-400 select select-accent'>
                            <option value="" >Standerd</option>
                            <option value="" >7th</option>
                            <option value="" >8th</option>
                            <option value="" >9th</option>
                            <option value="" >10th</option>
                        </select>

                        {/* <select name="" id="" className='w-full p-3 shadow-md mb-2 text-gray-400 select select-accent'>
                            <option value="" >Profession</option>
                            <option value="" >Developer</option>
                            <option value="" >Engineer</option>
                        </select>
                        <select name="" id="" className='w-full p-3 shadow-md mb-2 text-gray-400 select select-accent'>
                            <option value="" >Institute</option>
                            <option value="" >School</option>
                            <option value="" >College</option>
                        </select>
                        <input type="text" placeholder='Division' className='w-full p-3 input input-bordered shadow-md mb-2 text-black' /> */}
                    </div>
                </form>
                <button onClick={handleLogout} className="bg-black p-3 font-serif ">Logout</button>
                {/* <div className='text-gray-500 border-2 p-6'>
                    <h4 className='text-sm uppercase text-center'>Ratings</h4>
                    <div className="mb-2">
                        <p>October</p>
                        <p className='text-sm'>Contests Participated</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                            <p className='text-sm'>Contests-1</p>
                            <p className='text-sm'>Contests-2</p>
                            <p className='text-sm'>Contests-3</p>
                            <p className='text-sm'>Contests-4</p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <p>November</p>
                        <p className='text-sm'>Contests Participated</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <p className='text-sm'>Contests-1</p>
                            <p className='text-sm'>Contests-2</p>
                            <p className='text-sm'>Contests-3</p>
                        </div>
                    </div>
                    <div>
                        <div className="text-center">
                            <>
                                <p className='text-xl'>Institute Rank</p>
                                <span className="text-xs">2500</span>
                            </>
                            <>
                                <p className='text-xl'>Country Rank</p>
                                <span className="text-xs">2500</span>
                            </>
                            <>
                                <p className='text-xl'>Global Rank</p>
                                <span className="text-xs">2500</span>
                            </>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* Badges start here */}
            {/* <div className="border-2 px-6 m-6 text-gray-400">
                <p className='text-lg uppercase'>Badges</p>
                <div className='flex justify-around items-center text-center'>
                    <div>
                        <img className='bg-gray-500 p-24 my-2' src="" alt="" />
                        <p>Title</p>
                    </div>
                    <div>
                        <img className='bg-gray-500 p-24 my-2' src="" alt="" />
                        <p>Title</p>
                    </div>
                    <div>
                        <img className='bg-gray-500 p-24 my-2' src="" alt="" />
                        <p>Title</p>
                    </div>
                </div>
            </div> */}
            {/* Badges ends here */}

            {/* Submission start here */}
            {/* <div className="border-2 px-6 pb-6 m-6 font-medium text-gray-400">
                <p className='text-sm'>Submission</p>
                <div className="flex items-center gap-2">
                    <p className='text-xs'>Solved</p>
                    <p className='bg-green-500 w-6 h-3'></p>
                </div>
                <div className="flex items-center gap-2">
                    <p className='text-xs'>Partially</p>
                    <p className='bg-yellow-400 w-6 h-3'></p>
                </div>
                <div class="w-32 h-32 rounded-full border-2 bg-green-500 flex justify-center items-center mx-auto">

                </div>
            </div> */}
            {/* Submission ends here */}


            {/* Certificates start here */}
            {/* <div className="border-2 px-6 m-6 font-medium text-gray-400">
                <p className='text-lg uppercase'>Certificates</p>
                <div className='flex justify-center items-center gap-5 p-6'>
                    <div className="border-2 w-full h-40">
                        <div className='border-2 w-64 h-32 my-4 ml-4'></div>
                    </div>
                    <div className="border-2 w-full h-40">
                        <div className='border-2 w-64 h-32 my-4 ml-4'></div>
                    </div>
                </div>
            </div> */}
            {/* Certificates ends here */}
        </>
    );
};

export default UserProfile;