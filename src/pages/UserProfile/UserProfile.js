import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { loadUser, updateProfile, userLogout } from '../../api/authApi';
import { getMyAllSubmitedQuiz } from '../../api/submissionApi';


const UserProfile = () => {
    const navigate = useNavigate()
    const { currentUser, setCurrentUser } = useContext(AuthContext)
    const [myQuizSubmission, setMyQuizSubmission] = useState([])
    const [formModified, setFormModified] = useState(false);
    const [formValues, setFormValues] = useState({
        name: currentUser?.user?.name,
        phone: currentUser?.user?.phone,
        location: currentUser?.user?.location || "",
        std: currentUser?.user?.std || "",
    });





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
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const handleFieldChange = (fieldName, value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [fieldName]: value,
        }));

        // Set the form modification state after a delay (e.g., 300 milliseconds)
        debounce(() => {
            setFormModified(true);
        }, 300)();
    };


    const handleUpdate = (e) => {
        e.preventDefault();
        updateProfile(formValues.name, formValues.phone, formValues.std, formValues.location).then((res) => {
            alert(res.message);
            loadUser().then((data) => {
                if (data?.success) {
                    setCurrentUser({ user: data?.user, isAuthenticated: true })
                }
                else {
                    setCurrentUser({ isAuthenticated: false })
                }
                setFormModified(false)
            })
        }).catch((err) => { console.log(err); })

    };

    const handleCancel = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Reset the form values and modification state
        setFormValues({
            name: currentUser?.user?.name,
            phone: currentUser?.user?.phone,
            location: currentUser?.user?.location || "",
            std: currentUser?.user?.std || "",
        });
        setFormModified(false);
    };


    useEffect(() => {
        const unsub = async () => {
            try {
                const data = await getMyAllSubmitedQuiz();
                console.log(data[0], 'done');

                setMyQuizSubmission(data);

            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };

        unsub();
    }, []);



    return (
        <>
            <div className="lg:px-36 pt-24 px-6 ">

                <h2 className='text-3xl font-semibold mb-5 text-gray-700'>User Profile</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:p-6 sm:m-6 p-2 m-4'>
                <form className='flex flex-col md:flex lg:flex-row items-start justify-center border-2 p-6'>
                    {/* <div className="avatar mr-5 mb-5 lg:mb-0 flex">
                        <div className="w-24 rounded-full">
                            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt='' />
                        </div>
                        <FaPen className='text-gray-500'></FaPen>
                    </div> */}
                    <div>
                        <input type="text" placeholder='Name'
                            onChange={(e) => handleFieldChange('name', e.target.value)}
                            value={formValues.name}
                            className='w-full p-3 input input-bordered shadow-md mb-2 text-black ' />

                        <input
                            type="tel" maxlength="10" required

                            placeholder="Phone No"
                            name="phone"
                            className='w-full p-3 input input-bordered shadow-md mb-2 text-black'
                            onChange={(e) => handleFieldChange('phone', e.target.value)}
                            value={formValues.phone}
                            autoComplete="off"
                        />

                        <input
                            type="Number"
                            placeholder="standard"
                            maxlength="2"
                            name="standard"
                            className="w-full p-3 input input-bordered shadow-md mb-2 text-black"
                            onChange={(e) => handleFieldChange('std', e.target.value)}
                            value={formValues.std}
                        />


                        <input
                            type="text"
                            placeholder="city"
                            name="location"
                            className="w-full p-3 input input-bordered shadow-md mb-2 text-black"
                            onChange={(e) => handleFieldChange('location', e.target.value)}
                            value={formValues.location}
                        />







                    </div>

                    {formModified && (
                        <div className="flex justify-center items-center w-full mt-2 gap-4">
                            <button onClick={handleCancel} className="border-1 border-black  text-black font-bold py-2 px-4 border  rounded">
                                Cancel
                            </button><button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                Update
                            </button>
                        </div>
                    )}

                </form>


                <div className='text-black h-[50vh] border-2 md:p-6 px-2 py-3 overflow-y-scroll'>
                    <h4 className='text-sm uppercase text-center scroll-m-3 mb-3 '>Submissions</h4>



                    {
                        myQuizSubmission.map((quiz) => (
                            <div className="border-2 flex text-sm justify-between items-center  px-4 py-3 gap-x-3 text-gray-700">
                                <span className='w-1/2'>{quiz?.quizTitle}</span>
                                <div className="flex   justify-center items-center gap-4">

                                    <p>{quiz?.timestamp?.slice(0, -14)}</p>
                                    <h2>{quiz?.points}/{quiz?.answers?.length}</h2>
                                    {/* <button onClick={() => handleShowQuiz(quiz[0]?._id)} className=" inline-flex items-center justify-center p-0.5   overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span className=" px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            view
                                        </span>
                                    </button> */}

                                    {/* {show && <QuizModal currentQuiz={currentQuiz} setShow={setShow} />} */}

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