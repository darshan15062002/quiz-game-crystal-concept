import React, { useEffect, useState } from 'react'
import './PlayQuiz.css'
import image from '../../assets/hero2.png'
import ideabg7 from '../../assets/ideabg7.png'
import { getSingleQuiz, handleGetAllVisibleQuiz } from '../../api/quizApi'
import { QuizCard } from '../../Components/Pages/QuizCard/QuizCard'
import { Quiz } from '../../Components/Pages/Quiz/Quiz'
import { getMySingleSubmitedQuiz, submitQuiz } from '../../api/submissionApi'
import QuizModal from '../../Components/Pages/QuizModal/QuizModal'

const PlayQuiz = () => {





    const [quizs, setQuizs] = useState([]);
    const [questions, setQuestions] = useState({});
    const [title, setTitle] = useState('')
    const [count, setCount] = useState(0)
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [point, setPoint] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [resultShow, setResultShow] = useState(false)
    const [currentQuizId, setCurrentQuizId] = useState('')
    const [showAns, setShowAns] = useState(false)
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)


    useEffect(() => {
        // Fetch all quiz
        handleGetAllVisibleQuiz().then((data) => {
            setQuizs(data)
        }).catch((err) => console.log(err))
    }, [])


    const handlePlay = async (id) => {
        setCurrentQuizId(id)
        const res = await getMySingleSubmitedQuiz(id)
        console.log(res);
        if (!res) {
            getSingleQuiz(id).then((res) => {
                setTitle(res?.data?.quiz?.title)
                setQuestions(res?.data?.quiz?.questions)
            });

            setOpen(true)
        }
        else {
            alert('quiz already submitted')
        }

    }



    const handleOptionChange = (index, option) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[count] = index;
        setSelectedOptions(updatedOptions);
    };


    const handleNext = async () => {
        if (count === questions.length - 1) {

            let computedPoints = 0;
            questions.forEach((question, index) => {
                if (question.correctAnswer === String(selectedOptions[index])) {
                    computedPoints++;
                }
            });

            setPoint(computedPoints);
            setWrongAnswers(questions.length - computedPoints);
            setLoading(true);
            await submitQuiz(currentQuizId, title, selectedOptions, computedPoints).then((res) => {
                if (res?.data?.success) {
                    alert('Quiz submitted successfully')
                    setResultShow(true)
                }
                else {
                    setResultShow(false)
                    setWrongAnswers(0)
                    setPoint(0)
                    setOpen(false)
                    setSelectedOptions([])
                    setShowAns(false)
                    alert('something went wrong')

                }
            })


            setCount(0)
        } else {
            setCount((prevCount) => prevCount + 1);

        }
    };



    const handlePrev = () => {
        if (count > 0) {
            setCount((cur) => cur - 1)
        }

    }


    if (quizs?.length === 0) {
        return (<div className=' flex flex-col h-screen  justify-center items-center'>
            <h2 className=" rounded-lg p-3 text-gray-400 text-3xl  font-bold text-center">
                Daily Quiz
            </h2>
            <img className='rounded-md h-3/5' src={image} alt="" />
        </div>)
    }




    return (<div className="mt-16   flex flex-col h-full  w-screen gap-3 justify-center items-center">
        <h2 className=" rounded-lg p-3 text-black text-3xl  font-bold text-center">
            Daily Quiz
        </h2>

        <div className=" flex justify-center    gap-y-4 overflow-y-scroll items-center px-4 w-full   flex-wrap ">

            {resultShow === false && open === false && quizs?.map((item) => (


                <QuizCard item={item} handlePlay={handlePlay} />
            ))}
            {
                resultShow === false && open === true && questions && (
                    <Quiz loading={loading} questions={questions} title={title} count={count} handelClose={() => {
                        setResultShow(false)
                        setWrongAnswers(0)
                        setPoint(0)
                        setOpen(false)
                        setSelectedOptions([])
                        setShowAns(false)
                        setQuestions([])
                    }} handleNext={handleNext} handlePrev={handlePrev} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} />
                )
            }
            {
                resultShow === true && showAns === false && (<div className='flex flex-col gap-3 sm:w-96  w-full  '><div className='sm:w-96  w-full relative h-80  border-2 mx-2 rounded-lg flex flex-col gap-3 items-center justify-center rounded-t-none text-center  bg-white'>
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



                </div>)
            }

            {showAns &&
                (
                    <QuizModal title={title} questions={questions} setShowAns={setShowAns} setResultShow={setResultShow} count={count} selectedOptions={selectedOptions} handleNext={handleNext} handlePrev={handlePrev} />

                )
            }



        </div>
    </div>

    )
}

export default PlayQuiz