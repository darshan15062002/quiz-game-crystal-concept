import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleQuiz } from '../../api/quizApi'
import { useState } from 'react'
import { useEffect } from 'react'
import { QuizCard } from '../../Components/Pages/QuizCard/QuizCard'
import { Quiz } from '../../Components/Pages/Quiz/Quiz'


export const Quizs = () => {
    const { id } = useParams()
    console.log(id);
    const [quizs, setQuizs] = useState({});
    const [resultShow, setResultShow] = useState(false)
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [point, setPoint] = useState(0)
    const [showAns, setShowAns] = useState(false)
    const [wrongAnswers, setWrongAnswers] = useState(0);

    const handlePrev = () => {
        if (count > 0) {
            setCount((cur) => cur - 1)
        }

    }
    const handleNext = async () => {
        if (count === quizs?.questions.length - 1) {

            let computedPoints = 0;
            quizs?.questions?.forEach((question, index) => {
                if (question.correctAnswer === String(selectedOptions[index])) {
                    computedPoints++;
                }
            });

            setPoint(computedPoints);
            setWrongAnswers(quizs?.questions.length - computedPoints);
            setResultShow(true)
            setCount(0)
        } else {
            setCount((prevCount) => prevCount + 1);

        }
    };

    const handleOptionChange = (index, option) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[count] = index;
        setSelectedOptions(updatedOptions);
    };

    useEffect(() => {
        setLoading(true)
        // Fetch all quiz
        getSingleQuiz(id).then((res) => {
            setLoading(false)
            setQuizs(res.data.quiz)
        }).catch((err) => {
            setLoading(false)
            console.log(err)
        })
    }, [id])




    if (loading) return (
        <div className="flex flex-col gap-3  justify-center items-center h-screen">
            <div role="status">
                <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
    if (!quizs) return (
        <div className="flex flex-col gap-3  justify-center items-center h-screen">
            <div role="status">
                <h1 className='text-2xl'>No quiz found</h1>
            </div>
        </div>
    )

    return (
        <div className="flex flex-col h-screen  gap-3  justify-center items-center">

            <div className=" flex justify-center items-center px-4 w-full   flex-wrap ">

                {resultShow === false && open === false && <QuizCard item={quizs} handlePlay={() => {
                    setOpen(true)
                }} />
                }

                {
                    resultShow === false && open === true && (
                        <Quiz loading={loading} questions={quizs?.questions} count={count} handleNext={handleNext} handlePrev={handlePrev} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} />
                    )
                }
                {
                    resultShow === true && showAns === false && (<div className='flex flex-col sm:w-96  w-full  '><div className='sm:w-96  w-full relative h-80  border-2 mx-2 rounded-lg flex flex-col gap-3 items-center justify-center rounded-t-none text-center  bg-white'>
                        <h1 className='text-black'>Quiz  submitted successfully 👏👏
                        </h1>
                        <h3>Total Points : {point}</h3>
                        <h3>Total Wrong Answer : {wrongAnswers}</h3>
                        <div className="flex  gap-3 absolute bottom-5 ">
                            <button className='bg-black text-white p-2 ' onClick={() => {
                                setResultShow(false)
                                setWrongAnswers(0)
                                setPoint(0)
                                setOpen(false)
                                setSelectedOptions([])
                                setShowAns(false)
                            }}> Go Back</button>
                            <button className='bg-green-400 w-fit text-white p-2 ' onClick={() => { setShowAns(prev => !prev) }}> Show Answer</button>
                        </div>
                    </div>
                    </div>


                    )

                }
                {showAns &&
                    (
                        <div className='sm:w-96 w-full h-full  p-6 border-2 rounded-lg rounded-t-none flex gap-5 flex-col justify-center   bg-white' >

                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                                <h3 className="text-xl font-semibold text-black">
                                    {quizs.title}
                                </h3>
                                <button onClick={() => {
                                    setShowAns(false)
                                    setResultShow(true)
                                }} type="button" className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <h1 className='text-black text-left'><b>{count + 1}{")  "}{quizs?.questions[count]?.text}</b></h1>
                            <div className="answer">


                                {
                                    quizs?.questions[count]?.answers?.map((item, index) => (

                                        <div className={`text-black border px-2 rounded-md border-black flex gap-4 ${index + 1 === selectedOptions[count] && String(selectedOptions[count]) !== quizs?.questions[count]?.correctAnswer && 'bg-red-400'} ${String(index + 1) === quizs?.questions[count]?.correctAnswer && 'bg-green-400'}
                                    `}>

                                            <input type="radio" name="answer" id={"answer"} value={item} />
                                            <div key={index}>{item}</div>
                                        </div>
                                    ))
                                }




                            </div>
                            <div className=" flex justify-between items-center">
                                <button className='bg-[#000000] shadow-md text-white px-2 py-1' onClick={() => handlePrev()}>{"Previous"}</button>
                                {count !== quizs?.questions?.length - 1 && <button className='bg-[#09BD81] shadow-md text-white px-2 py-1' onClick={() => handleNext()}>{"Next"}</button>}

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}