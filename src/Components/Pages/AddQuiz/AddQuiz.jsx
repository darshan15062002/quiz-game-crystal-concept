import React, { useEffect, useState } from 'react'
import { createQuiz, deleteQuiz, getGeneratedQuiz, handleGetAllQuiz, updateQuiz } from '../../../api/quizApi'
import { useNavigate } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'

export const AddQuiz = () => {
    const [quizs, setQuizs] = useState([])
    const navigator = useNavigate()
    const [title, setTitle] = useState('')
    const [updateId, setUpdateId] = useState('')
    const [text, setText] = useState('')
    const [std, setStd] = useState()
    const [button, setButton] = useState('Create Quiz')
    const [questions, setQuestions] = useState([{ text: '', answers: [], correctAnswer: '' }])
    const [submissions, setSubmissions] = useState([])
    const [loading, setLoading] = useState(false)



    const handleUpdate = (quiz) => {

        setButton("update Quiz")
        setUpdateId(quiz?._id)

        setTitle(quiz?.title)
        setStd(quiz?.std)
        setQuestions(quiz?.questions)

    }


    const handleDeleteQuiz = async (id) => {
        deleteQuiz(id).then((res) => {
            alert(res.message);
            handleAllQuiz()
        });
    }



    const handleCreateQuiz = async (e) => {
        e.preventDefault();
        if (updateId) {
            await updateQuiz(updateId, {
                title: title,
                questions,
                std: std,
            }).then((res) => {
                alert("quiz updated successfully")
                handleAllQuiz()
            })

        }
        else {
            createQuiz({
                title: title,
                questions,
                std,
            }).then((data) => {
                setTitle("")
                setStd()
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
        setStd()
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
        handleGetAllQuiz().then((res) => {
            setQuizs(res.quizs)
            setSubmissions(res.docs)

        }).catch((err) => console.log(err))
    }




    const handleGenerateQuiz = () => {
        setLoading(true)
        getGeneratedQuiz(text).then((res) => {
            if (res.array) {
                setQuestions(res?.array)
            }
            else {
                alert(res?.message)
            }
            setLoading(false)

            setText('')
        }).catch((err) => {
            setLoading(false)
        })

    }

    useEffect(() => {
        // Fetch all quiz

        handleAllQuiz()

    }, [])

    return (

        <div className='grid rounded-lg shadow-lg mx-4   bg-white  grid-cols-1 lg:grid-cols-2 gap-4 border-2 sm:p-6 sm:m-6 p-1'>



            <form onSubmit={handleCreateQuiz} className='flex md:border-r-4 md:border-b-0 border-b-4  p-6 flex-col gap-5 items-start justify-center '>
                <div className="flex justify-between items-center text-center gap-5  w-full">
                    <input
                        type="text"
                        id="quizTitle"
                        placeholder="Quiz Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} required
                        className='w-full p-3  bg-slate-50 input input-bordered border-black  mb-2 text-black ' />
                    <input
                        type="text"
                        placeholder="Std..."
                        value={std}  // Format as 'YYYY-MM-DDTHH:mm'
                        onChange={(e) => {
                            setStd(e.target.value)
                        }}
                        required
                        className='w-full bg-slate-50 p-3 input input-bordered border-black mb-2 text-black'
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
                                className='w-full bg-slate-50 p-3 input input-bordered border-black  mb-2 text-black '

                            />
                            <textarea
                                key={index}
                                id={`options${index}`}
                                placeholder="Options (comma-separated)"
                                value={question.answers?.join(',')}
                                onChange={(e) => handleOptionsChange(e, index)}
                                required
                                className='w-full  bg-slate-50 p-3 h-36 input input-bordered border-black  mb-2 text-black'
                                style={{ overflow: 'hidden', resize: 'none' }}
                            />
                            <input
                                id={`correctAnswer${index}`}
                                type='text'
                                placeholder="Correct Answer Index (comma separated)"
                                value={question.correctAnswer}
                                onChange={(e) => handleCorrectAnswerChange(e, index)}
                                required
                                className='w-full bg-slate-50 p-3 input input-bordered border-black  mb-2 text-black'
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


            <div className='text-gray-500 md:h-80   p-6 '>
                <div className="flex justify-center items-center flex-col gap-y-3">

                    <textarea
                        className='block p-2.5  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'
                        id="pdf_text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        name="pdf_text"
                        rows="7"
                        cols="50"
                    />

                    {/* <label htmlFor="rows">Enter No Rows:</label>
<input value={rows} onChange={(e) => setRows(e.target.value)} className='block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md' type="number" name="rows" /> */}


                    <button onClick={handleGenerateQuiz} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">

                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            {loading &&
                                <svg class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>

                            } Generate
                        </span>
                    </button>



                </div>
                <h2 className='text-sm uppercase text-center'>Previously added Quiz</h2>
                <div className="flex flex-col overflow-y-scroll no-scrollbar gap-2">
                    {quizs ? (
                        quizs?.map((item, index) => {

                            return (
                                <div key={item?._id}
                                    className=" group/item rounded-lg bg-slate-50 flex justify-between items-center border-2 p-2"

                                >

                                    <div className="flex justify-between text-xs sm:text-lg relative items-center w-full">

                                        <h1 className='font-sans w-1/2 text-sm'>{item?.title}</h1>



                                        <div className="flex items-center  gap-5">
                                            <span className='text-sm'>{submissions[index]}</span>
                                            <span className='text-sm'>{item?.std} std</span>
                                            <button className="text-black p-2  " id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button">
                                                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>

                                            <div id="dropdown" className=" z-50 group/item group-hover/item:visible invisible block right-0 top-9 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
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
                                                        <span className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' onClick={() => handleDeleteQuiz(item?._id)}>
                                                            DELETE
                                                        </span>                                                          </li>
                                                </ul>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            )
                        })) : (<svg class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>)

                    }
                </div>
            </div>




        </div>
    )
}
