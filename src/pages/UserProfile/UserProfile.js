import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { loadUser, updateProfile, userLogout } from '../../api/authApi';
import { getMyAllSubmitedQuiz } from '../../api/submissionApi';
import QuizModal from '../../Components/Pages/QuizModal/QuizModal';
import { getSingleQuiz } from '../../api/quizApi';
import Swal from 'sweetalert2';


const UserProfile = () => {
    const navigate = useNavigate()
    const [showAns, setShowAns] = useState(false)
    const [title, setTitle] = useState("")
    const [questions, setQuestions] = useState([])
    const [count, setCount] = useState(0)
    const [currentQuiz, setCurrentQuiz] = useState({})
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
                Swal.fire({
                    icon: 'success',
                    title: 'Logout Successful!',
                    text: data?.message,
                }).then(() => {
                    navigate("/");
                    setCurrentUser({ isAuthenticated: false, loading: true });
                    loadUser()
                        .then((data) => {
                            if (data.success) {
                                setCurrentUser({ user: data.user, isAuthenticated: true, loading: false });
                            } else {
                                setCurrentUser({ isAuthenticated: false, loading: false });
                            }
                        })
                        .catch((error) => setCurrentUser({ isAuthenticated: false, loading: false }));
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Logout Failed',
                    text: 'Failed to logout. Please try again.',
                });
            }
        });
    };
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
        updateProfile(formValues.name, formValues.phone, formValues.std, formValues.location)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Profile Updated!',
                    text: res.message,
                }).then(() => {
                    loadUser()
                        .then((data) => {
                            if (data?.success) {
                                setCurrentUser({ user: data.user, isAuthenticated: true });
                            } else {
                                setCurrentUser({ isAuthenticated: false });
                            }
                            setFormModified(false);
                        })
                        .catch((error) => {
                            console.error(error);
                            setCurrentUser({ isAuthenticated: false });
                            setFormModified(false);
                        });
                });
            })
            .catch((err) => {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Update Failed',
                    text: 'An error occurred while updating the profile. Please try again later.',
                });
            });
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

    const handleShowQuiz = (id) => {
        setShowAns(true);
        setCurrentQuiz(myQuizSubmission.find(q => q._id === id));
    };
    useEffect(() => {
        if (showAns && currentQuiz) {
            const unsub = (id) => {
                getSingleQuiz(id)
                    .then((res) => {
                        if (res?.data?.quiz) {
                            setTitle(res?.data?.quiz?.title);
                            setQuestions(res?.data?.quiz?.questions);
                        } else {
                            setQuestions([]);
                            setCurrentQuiz({});
                            setCount(0);
                            setShowAns(false);
                            Swal.fire({
                                icon: 'info',
                                title: 'Quiz Unavailable',
                                text: 'The quiz is no longer available.',
                            });
                        }
                    })
                    .catch((err) => {
                        console.error('Error fetching quiz:', err);
                    });
            };
            unsub(currentQuiz?.quizId);
        }
    }, [showAns, currentQuiz]);

    const handleNext = async () => {

        setCount((prevCount) => prevCount + 1);


    };
    const handlePrev = () => {
        if (count > 0) {
            setCount((cur) => cur - 1)
        }

    }

    const handleClose = () => {

        setQuestions([])
        setCurrentQuiz({})
        setShowAns(false)
        setCount(0)
    }

    useEffect(() => {
        const unsub = async () => {
            try {
                const data = await getMyAllSubmitedQuiz();
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
                        myQuizSubmission?.map((quiz) => (
                            <div className="border-2 flex text-sm justify-between items-center  px-4 py-3 gap-x-3 text-gray-700">
                                <span className='w-1/2'>{quiz?.quizTitle}</span>
                                <div className="flex   justify-center items-center gap-4">

                                    <p>{quiz?.timestamp?.slice(0, -14)}</p>
                                    <h2>{quiz?.points}/{quiz?.answers?.length}</h2>
                                    <button onClick={() => handleShowQuiz(quiz?._id)} className=" inline-flex items-center justify-center p-0.5   overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span className=" px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            view
                                        </span>
                                    </button>

                                    {showAns && currentQuiz && questions && <QuizModal title={currentQuiz.quizTitle} questions={questions} setShowAns={setShowAns} setResultShow={handleClose} count={count} selectedOptions={currentQuiz?.answers} handleNext={handleNext} handlePrev={handlePrev} />}

                                </div>


                            </div>
                        ))
                    }





                </div>
            </div>
            <div className="border-2 px-6 m-6 text-gray-400">
                <button onClick={handleLogout} className="bg-black p-2 font-serif ">Logout</button>
            </div>

        </>
    );
};

export default UserProfile;