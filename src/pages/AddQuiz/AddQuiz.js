import React, { useEffect, useState } from 'react';
import "./AddQuiz.scss"
import { AiFillDelete } from 'react-icons/ai'
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { createQuiz, deleteQuiz, handleGetAllQuiz, updateQuiz } from '../../api/quizApi';


const AddQuiz = () => {

    const [quizs, setQuizs] = useState([])
    const navigator = useNavigate()
    const currentDate = new Date()
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


    const handleSignOut = () => {

        try {
            navigator("/")
        }
        catch (err) {
            console.log(err, "err");
        }
    }

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
        <>
            <div className="lg:px-24 pt-12 px-6">
                <div className='flex justify-start items-center text-gray-500 text-sm font-semibold underline'>
                    <BsFillCaretLeftFill></BsFillCaretLeftFill>
                    <div className='text-lg cursor-pointer font-mono mb-5 text-gray-700' onClick={() => handleSignOut()}>Logout as Admin</div>
                </div>
                <h2 className='text-3xl font-semibold mb-5 text-gray-700'>Create Quiz</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 border-2 sm:p-6 sm:m-6 p-1'>



                <form onSubmit={handleCreateQuiz} className='flex flex-col gap-5 items-start justify-center border-2 p-6'>
                    <div className="flex justify-between text-center gap-5 pr-5  w-full">
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

                    <div className=" overflow-y-scroll scroll-smooth h-80 scrollbar" >
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


                <div className='text-gray-500 h-[90vh] border-2 p-6'>
                    <h2 className='text-sm uppercase text-center'>Previously added Quiz</h2>
                    <div className="flex flex-col h-full overflow-y-scroll gap-2">
                        {quizs ? (
                            quizs?.map((item, index) => {
                                console.log(new Date(new Date(item?.startDate).getTime() - (5 * 60 * 60 * 1000 + 30 * 60 * 1000)), currentDate.getTime());
                                return (
                                    <div key={item?._id}
                                        className="flex justify-between items-center border-2 p-2"

                                    >

                                        <div className="flex justify-between text-xs sm:text-lg items-center w-full">
                                            <h1 className='font-bold'>{item?.title}</h1>

                                            <span>{item?.startDate?.slice(0, -8)}</span>

                                            <div className="flex items-center gap-1">

                                                {item?.visibility ?
                                                    (
                                                        <button onClick={() => handleVisibility(item?._id, false)} className="bg-green-400 px-2 py-1 text-white">Visible</button>
                                                    ) : (
                                                        <button onClick={() => handleVisibility(item?._id, true)} className="bg-red-400 px-2 py-1 text-white">Hide</button>
                                                    )}
                                                <button className='bg-black px-1 py-1 text-white ' onClick={() => handleUpdate(item)}>
                                                    UPDATE
                                                </button>
                                                <button className="bg-black px-1 py-1 text-white" onClick={() => handleCopy(item?._id)}>
                                                    Copy
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })) : (<h1>Loading...</h1>)

                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddQuiz;
