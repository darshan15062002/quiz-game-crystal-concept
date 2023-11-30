import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleQuiz } from '../../api/quizApi'
import { useState } from 'react'
import { useEffect } from 'react'
import { QuizCard } from '../../Components/Pages/QuizCard/QuizCard'
import { Quiz } from '../../Components/Pages/Quiz/Quiz'
import QuizModal from '../../Components/Pages/QuizModal/QuizModal'

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
        // Fetch all quiz
        getSingleQuiz(id).then((res) => {

            setQuizs(res.data.quiz)
        }).catch((err) => console.log(err))
    }, [])
    console.log(quizs);
    return quizs && (
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
                    resultShow === true && (<div className='flex flex-col gap-3 sm:w-96  w-full  '><div className='sm:w-96  w-full relative h-80  border-2 mx-2 rounded-lg flex flex-col gap-3 items-center justify-center rounded-t-none text-center  bg-white'>
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
                {/* {showAns &&
                    (
                        <div className='sm:w-96 w-full h-full  p-6 border-2 mx-2 rounded-lg rounded-t-none flex gap-5 flex-col justify-center   bg-white' >
                            <h1 className='text-black text-left'><b>{count + 1}{")  "}{quizs?.questions[count]?.text}</b></h1>
                            <div className="answer">


                                {
                                    quizs?.questions[count]?.answers?.map((item, index) => (

                                        <div className={`text-black border px-2 rounded-md border-black flex gap-4 ${String(index + 1) === selectedOptions[count] && selectedOptions[count] !== quizs?.questions[count]?.correctAnswer && 'bg-red-400'} ${String(index + 1) === quizs?.questions[count]?.correctAnswer && 'bg-green-400'}
                                    `}>

                                            <input type="radio" name="answer" id={"answer"} value={item} />
                                            <div key={index}>{item}</div>
                                        </div>
                                    ))
                                }




                            </div>
                            <div className=" flex justify-between items-center">
                                <button className='bg-[#000000] shadow-md text-white px-2 py-1' onClick={() => handlePrev()}>{"Previous"}</button>
                                <button className='bg-[#09BD81] shadow-md text-white px-2 py-1' disabled={loading} onClick={() => handleNext()}>{count === quizs?.questions.length - 1 ? "Submit" : "Next"}</button>

                            </div>
                        </div>
                    )
                } */}
            </div>
        </div>
    )
}