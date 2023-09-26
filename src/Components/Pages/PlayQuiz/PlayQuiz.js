import React, { useEffect, useState } from 'react'
import './PlayQuiz.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase'
import { Link } from 'react-router-dom'
const PlayQuiz = () => {
    const currentDate = new Date();
    const [quiz, setQuiz] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [count, setCount] = useState(0)
    const [selected, setSelected] = useState("")
    const [point, setPoint] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [resultShow, setResultShow] = useState(false)


    const [open, setOpen] = useState(false)




    console.log('Points:', point);
    console.log('Wrong Answers:', wrongAnswers);
    useEffect(() => {
        const getQuiz = async () => {
            const unsub = await getDocs(collection(db, "quiz"));
            let a = []
            unsub.forEach((doc) => {

                a.push(doc.data())

            });
            setQuiz(a.filter((item) => new Date(item.quizDate) <= currentDate && currentDate <= new Date(new Date(item?.quizDate).getTime() + (11 * 60 * 60 * 1000) + (59 * 60 * 1000))
            ))

            return () => {
                unsub();
            };
        };

        getQuiz();
    }, []);


    const handlePlay = (quizTitle) => {
        setOpen(true)
        const filterData = quiz.filter((doc) => doc.quizTitle === quizTitle)
        setQuestions(filterData[0].quiz)
        console.log(filterData[0].quiz);
    }

    const handleNext = () => {
        if (selected !== questions[count].correctAnswer) {
            setWrongAnswers((prev) => prev + 1);

        } else if (selected === questions[count].correctAnswer) {
            setPoint((prevPoints) => prevPoints + 1);
        }

        if (count === questions.length - 1) {
            setResultShow(true)
            setCount(0)


        } else {
            setCount((prevCount) => prevCount + 1);

            setSelected('');
        }
    };

    const handlePrev = () => {
        setCount((cur) => cur - 1)
    }


    if (quiz.length === 0) {
        return (<div className=' flex flex-col h-screen  justify-center items-center'>
            <h2 className=" rounded-lg p-3 text-gray-400 text-3xl  font-bold text-center">
                Daily Quiz
            </h2>
            <h1 className='absolute text-black font-bold text-3xl opacity-80'>NO Live Quiz</h1>
            <img className='rounded-md h-3/5' src="https://i.giphy.com/media/FRxHnTUBxQysLAV2eA/giphy.webp" alt="" />
        </div>)
    }




    return (<div className="flex flex-col gap-3 w-full h-screen justify-center items-center">
        <h2 className=" rounded-lg p-3 text-gray-400 text-3xl  font-bold text-center">
            Daily Quiz
        </h2>
        <div className=" flex justify-center items-center  flex-wrap ">
            {resultShow === false && open === false && quiz.map((item, index) => (
                <div className="w-96 py-8 px-10 rounded-lg bg-slate-200 mx-2  flex flex-col justify-center gap-4 " key={item.quizTitle}>

                    <h2 className="text-black text-center pt-5  font-bold  ">
                        {item.quizTitle}
                    </h2>
                    <p className="  text-gray-900 tracking-wide ">
                        <b>Started At:</b> {new Date(item.quizDate).toLocaleString()}
                    </p>
                    <p className="  text-gray-900 tracking-wide ">

                        <b>End on:</b>  {new Date(new Date(item?.quizDate).getTime() + 24 * 60 * 60 * 1000).toLocaleString()}
                    </p>

                    <div className="flex justify-center gap-4 mb-6  text-xs font-medium">
                        <Link className="text-gray-500 bg-slate-50 shadow-md  px-6 py-3">
                            Live
                        </Link>
                        <Link className="bg-[#09BD81] shadow-md text-white px-6 py-3" onClick={() => handlePlay(item.quizTitle)}>
                            Play
                        </Link>
                    </div>
                </div>
            ))}
            {
                resultShow === false && open === true ? (<div className='w-96 h-full  p-6 border-2 mx-2 rounded-lg rounded-t-none flex gap-5 flex-col justify-center   bg-white' key={count}>
                    <h1 className='text-black text-left'><b>{questions[count]._id}{")  "}{questions[count].question}</b></h1>
                    <div className="answer">

                        {
                            questions[count].options.split(",").map((item, index) => (
                                <div className='text-black flex gap-4'>
                                    <input type="radio" name="answer" id="answer" value={item} onClick={(e) => setSelected(e.target.value)} />
                                    <div key={index}>{item}</div>
                                </div>
                            ))
                        }



                    </div>
                    <div className=" flex justify-between items-center">
                        <button className='bg-[#000000] shadow-md text-white px-2 py-1' onClick={() => handlePrev()}>{"Previous"}</button>
                        <button className='bg-[#09BD81] shadow-md text-white px-2 py-1' onClick={() => handleNext()}>{count === questions.length - 1 ? "Submit" : "Next"}</button>

                    </div>
                </div>) : null
            }
            {
                resultShow === true && (<div className='w-96 relative h-80  border-2 mx-2 rounded-lg flex flex-col gap-3 items-center justify-center rounded-t-none text-center  bg-white'>
                    <h1 className='text-black'>Quiz  submitted successfully 👏👏
                    </h1>
                    <h3>Total Points : {point}</h3>
                    <h3>Total Wrong Answer : {wrongAnswers}</h3>
                    <button className='bg-black text-white p-2 absolute bottom-5' onClick={() => {
                        setResultShow(false)
                        setWrongAnswers(0)
                        setPoint(0)
                        setOpen(false)
                    }}> Go Back</button>
                </div>)
            }
        </div>
    </div>

    )
}

export default PlayQuiz