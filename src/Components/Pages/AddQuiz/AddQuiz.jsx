import React, { useEffect, useState } from 'react'
import { createQuiz, handleGetAllQuiz, updateQuiz } from '../../../api/quizApi'
import { useNavigate } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'

export const AddQuiz = () => {
    const [quizs, setQuizs] = useState([])
    const navigator = useNavigate()
    const [title, setTitle] = useState('')
    const [updateId, setUpdateId] = useState('')
    const [startDate, setStartDate] = useState("")
    const [button, setButton] = useState('Create Quiz')
    const [questions, setQuestions] = useState([{ text: '', answers: [], correctAnswer: '' }])





    const handleUpdate = (quiz) => {

        setButton("update Quiz")
        setUpdateId(quiz?._id)

        setTitle(quiz?.title)
        setStartDate(quiz?.startDate?.slice(0, -8))
        setQuestions(quiz?.questions)

    }


    // const handleDeleteQuiz = async (id) => {
    //     deleteQuiz(id).then((res) => {
    //         alert(res.message);
    //     });
    // }



    const handleCreateQuiz = async (e) => {
        e.preventDefault();
        if (updateId) {
            await updateQuiz(updateId, {
                title: title,
                questions,
                startDate,
            }).then((res) => {
                alert("quiz updated successfully")
                handleAllQuiz()
            })

        }
        else {
            createQuiz({
                title: title,
                questions,
                startDate,
            }).then((data) => {
                setTitle("")
                setStartDate("")
                setQuestions([{ text: '', answers: [], correctAnswer: '' }])
                alert(data.data.message)
                handleAllQuiz()
            })

        }

    }

    const handleQuestionChange = (e, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].text = e.target.value;
        setQuestions(updatedQuestions);
    }

    const handleOptionsChange = (e, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].answers = (e.target.value).split(",")
        setQuestions(updatedQuestions);
    };

    const handleCorrectAnswerChange = (e, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].correctAnswer = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleAddQuestion = () => {

        setQuestions((prev) => [...prev, { title: '', answers: [], correctAnswer: '' }]);
    };


    const handleReset = () => {
        setTitle("")
        setButton('Create Quiz')
        setStartDate()
        setUpdateId('')
        setQuestions([{ text: '', answers: [], correctAnswer: '' }])

    }

    const handleRemove = (index) => {
        // Create a copy of the questions array
        const updatedQuestions = [...questions];

        // Remove the question at the specified index
        updatedQuestions.splice(index, 1);

        if (updatedQuestions.length === 0) {
            updatedQuestions.push({ text: '', answers: [], correctAnswer: '' })
        }

        // Update the state with the modified array
        setQuestions(updatedQuestions);


    };




    const handleVisibility = async (id, x) => {
        await updateQuiz(id, {
            visibility: x
        }).then((res) => {
            handleAllQuiz()
            if (x) {
                alert("Now Quiz is visible on website")
            }
            else {
                alert("Now Quiz is not visible on website")
            }

        })



    }
    const handleCopy = async (id) => {
        const shareableLink = `https://crystal-concept-a928f.web.app/quiz/${id}`;


        if (navigator.clipboard) {
            await navigator.clipboard.writeText(shareableLink);
            console.log('Link copied to clipboard:', shareableLink);
        } else {
            // Fallback for browsers that don't support Clipboard API
            const tempInput = document.createElement('input');
            tempInput.value = shareableLink;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            console.log('Link copied to clipboard (fallback):', shareableLink);
        }

    };

    const handleAllQuiz = () => {
        handleGetAllQuiz().then((data) => {
            console.log(data);
            setQuizs(data)
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        // Fetch all quiz

        handleAllQuiz()

    }, [])

    return (

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 border-2 sm:p-6 sm:m-6 p-1'>



            <form onSubmit={handleCreateQuiz} className='flex md:border-r-4 md:border-b-0 border-b-4  p-6 flex-col gap-5 items-start justify-center '>
                <div className="flex justify-between items-center text-center gap-5  w-full">
                    <input
                        type="text"
                        id="quizTitle"
                        placeholder="Quiz Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} required
                        className='w-full p-3 input input-bordered border-black  mb-2 text-black ' />
                    <input
                        type="datetime-local"
                        placeholder="Date Of Start"
                        value={startDate}  // Format as 'YYYY-MM-DDTHH:mm'
                        onChange={(e) => {
                            setStartDate(e.target.value)
                        }}
                        required
                        className='w-full p-3 input input-bordered border-black mb-2 text-black'
                    />
                </div>

                <div className=" overflow-y-scroll no-scrollbar  scroll-smooth h-80 scrollbar" >
                    {questions?.map((question, index) => (
                        <div key={index} className='' >
                            <div className="flex gap-3 items-center my-2 justify-between px-5">
                                <p className='text-black font-semibold'>{index + 1}{")"}</p>
                                <AiFillDelete size={20} color='black' onClick={() => handleRemove(index)} />
                            </div>
                            <textarea
                                id={`question${index}`}
                                placeholder="Question"
                                value={question.text}
                                onChange={(e) => handleQuestionChange(e, index)}
                                required
                                className='w-full p-3 input input-bordered border-black  mb-2 text-black '

                            />
                            <textarea
                                key={index}
                                id={`options${index}`}
                                placeholder="Options (comma-separated)"
                                value={question.answers?.join(',')}
                                onChange={(e) => handleOptionsChange(e, index)}
                                required
                                className='w-full p-3 h-36 input input-bordered border-black  mb-2 text-black'
                                style={{ overflow: 'hidden', resize: 'none' }}
                            />
                            <input
                                id={`correctAnswer${index}`}
                                type='text'
                                placeholder="Correct Answer Index (comma separated)"
                                value={question.correctAnswer}
                                onChange={(e) => handleCorrectAnswerChange(e, index)}
                                required
                                className='w-full p-3 input input-bordered border-black  mb-2 text-black'
                            />
                        </div>))}
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                    <button type="button" onClick={handleAddQuestion} className='text-gray-500 shadow-lg border-2 px-2 py-1'>
                        Add Question
                    </button>

                    <button onClick={() => handleCreateQuiz} className='bg-[#2D80F6] shadow-lg text-white px-2 py-1'>{button}</button>
                    <button onClick={handleReset} className=' shadow-lg bg-black text-white  px-2 py-1'>Reset</button>
                </div>
            </form>


            <div className='text-gray-500 h-80 p-6 '>
                <h2 className='text-sm uppercase text-center'>Previously added Quiz</h2>
                <div className="flex flex-col h-full overflow-y-scroll no-scrollbar gap-2">
                    {quizs ? (
                        quizs?.map((item, index) => {

                            return (
                                <div key={item?._id}
                                    className=" group/item flex justify-between items-center border-2 p-2"

                                >

                                    <div className="flex justify-between text-xs sm:text-lg relative items-center w-full">
                                        <h1 className='font-sans font-semibold'>{item?.title}</h1>

                                        <span>{item?.startDate?.slice(0, -8)}</span>

                                        <div className="flex items-center  gap-1">

                                            <button className="text-black p-2  " id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button">
                                                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>

                                            <div id="dropdown" className=" group/item group-hover/item:visible invisible block right-0 top-10 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                <ul class=" cursor-pointer py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                    <li>
                                                        {item?.visibility ?
                                                            (
                                                                <span onClick={() => handleVisibility(item?._id, false)} className="  block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Visible</span>
                                                            ) : (
                                                                <span onClick={() => handleVisibility(item?._id, true)} className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hide</span>
                                                            )}
                                                    </li>
                                                    <li>
                                                        <span className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' onClick={() => handleUpdate(item)}>
                                                            UPDATE
                                                        </span>                                                        </li>
                                                    <li>
                                                        <span className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' onClick={() => handleCopy(item?._id)}>
                                                            Copy
                                                        </span>                                                         </li>
                                                    <li>
                                                        <span className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' onClick={() => handleRemove(item?._id)}>
                                                            DELETE
                                                        </span>                                                          </li>
                                                </ul>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            )
                        })) : (<h1>Loading...</h1>)

                    }
                </div>
            </div>
        </div>
    )
}