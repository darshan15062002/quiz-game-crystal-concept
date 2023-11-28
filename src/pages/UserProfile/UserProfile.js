import React, { useContext, useEffect, useState } from 'react';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { loadUser, userLogout } from '../../api/authApi';
import { getMyAllSubmitedQuiz } from '../../api/submissionApi';
import { getSingleQuiz } from '../../api/quizApi';
import QuizModal from '../../Components/Pages/QuizModal/QuizModal';

const UserProfile = () => {
    const navigate = useNavigate()
    const { currentUser, setCurrentUser } = useContext(AuthContext)
    const [myQuizSubmission, setMyQuizSubmission] = useState([])
    const [show, setShow] = useState(false)
    const [currentQuiz, setCurrentQuiz] = useState({})



    const handleLogout = () => {
        userLogout().then((data) => {
            if (data?.success) {
                alert(data?.message)
                navigate("/")

                loadUser().then((data) => {
                    if (data?.success) {
                        setCurrentUser({ user: data?.user, isAuthenticated: true })
                    }
                    else {
                        setCurrentUser({ isAuthenticated: false })
                    }

                }).catch((error) => console.log(error))
            }
        })

    }

    const handleShowQuiz = (id) => {
        setShow(true)
        setCurrentQuiz(myQuizSubmission.find(q => q[0]._id === id))

    }


    useEffect(() => {
        const unsub = async () => {
            try {
                const data = await getMyAllSubmitedQuiz();

                // Check if data is an array before mapping
                if (Array.isArray(data)) {
                    // Use Promise.all to wait for all asynchronous operations to complete
                    const quizPromises = data.map(async (item) => {
                        const quiz = await getSingleQuiz(item?.quizId);
                        return [quiz?.data?.quiz, item?.points, item?.answers];
                    });

                    const quizzes = await Promise.all(quizPromises);

                    setMyQuizSubmission(quizzes);
                } else {
                    console.error('Data is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };

        unsub();
    }, []);



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


                <div className='text-black border-2 p-6'>
                    <h4 className='text-sm uppercase text-center'>Submissions</h4>



                    {
                        myQuizSubmission.map((quiz) => (
                            <div className="border-2 flex justify-between items-center px-4 py-3 m-1 text-gray-400">
                                <h3>{quiz[0]?.title}</h3>
                                <div className="flex justify-center items-center gap-4">
                                    <h2>{quiz[1]}/{quiz[0].questions.length}</h2>
                                    <button onClick={() => handleShowQuiz(quiz[0]?._id)} className=" inline-flex items-center justify-center p-0.5   overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span className=" px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            view
                                        </span>
                                    </button>

                                    {show && <QuizModal currentQuiz={currentQuiz} setShow={setShow} />}

                                </div>


                            </div>
                        ))
                    }





                </div>
            </div>
            <div className="border-2 px-6 m-6 text-gray-400">
                <button onClick={handleLogout} className="bg-black p-2 font-serif ">Logout</button>
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
                <div className="w-32 h-32 rounded-full border-2 bg-green-500 flex justify-center items-center mx-auto">

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