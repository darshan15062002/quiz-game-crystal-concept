import React, { useEffect, useState } from 'react';


import { arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import "./AddQuiz.scss"
import { BsFillCaretLeftFill } from 'react-icons/bs';



import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AddQuiz = () => {
    const navigator = useNavigate()
    const currentDate = new Date();






    const [quizTitle, setQuizTitle] = useState('');

    const [checked, setChecked] = React.useState(false);
    const [status, setStatus] = useState('Create Quiz');
    const [quizDate, setQuizDate] = useState();
    const [questions, setQuestions] = useState([{ _id: 1, question: '', options: '', correctAnswer: '' }]);

    const [quiz, setQuiz] = useState([]);





    // Fetch quiz
    useEffect(() => {

        const getQuiz = async () => {
            const unsub = await getDocs(collection(db, "quiz"));
            let a = []
            unsub.forEach((doc) => {

                a.push(doc.data())

            });
            setQuiz(a)

            return () => {
                unsub();
            };
        };

        getQuiz();
    }, []);

    const handleUpdateQue = (quizTitle) => {

        const filterData = quiz.filter((doc) => doc.quizTitle === quizTitle)
        console.log(filterData[0].quiz);
        setQuizTitle(filterData[0].quizTitle)
        setQuizDate(filterData[0].quizDate)
        setQuestions(filterData[0].quiz)
        setStatus("Upadate Quiz")
    }




    const handleQuizTitleChange = (e) => {
        setQuizTitle(e.target.value);
    };
    const handleQuizDateChange = (e) => {
        setQuizDate(e.target.value);
    };

    const handleQuestionChange = (e, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleOptionsChange = (e, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].options = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleCorrectAnswerChange = (e, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].correctAnswer = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleAddQuestion = () => {
        const id = questions[questions.length - 1]._id
        setQuestions([...questions, { _id: id + 1, question: '', options: '', correctAnswer: '' }]);
    };
    const handleReset = () => {
        setQuizTitle("")
        setQuizDate()
        setQuestions([{ _id: 1, question: '', options: '', correctAnswer: '' }])

    }

    const handleRemove = () => {

        // setQuestions(questions.filter((item) => item._id == ))

    }


    const handleCreateQuiz = async (e) => {
        e.preventDefault();

        console.log('Quiz Title:', quizTitle);
        console.log('Questions:', questions);


        try {
            // Update Firestore document
            const res = await getDoc(doc(db, "quiz", quizTitle));
            if (!res.exists()) {
                await setDoc(doc(db, "quiz", quizTitle), { quiz: [] });
            }
            await updateDoc(doc(db, "quiz", quizTitle), {
                quizTitle,
                quizDate,
                quiz: arrayUnion(
                    ...questions
                )
            });
            alert('Quizs are added succesfully');
            setQuestions([{ _id: 1, question: '', options: '', correctAnswer: '' }])
            setQuizTitle('')

        } catch (err) {
            console.log(err, "dars");
        }
    };

    const handleSignOut = () => {

        try {
            signOut(auth);
            navigator("/")
        }
        catch (err) {
            console.log(err, "err");
        }
    }

    function handleChecked(e, id) {
        console.log(id);
        // setChecked((prev) => [...prev, e.target.checked]);

    }

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
                            value={quizTitle}
                            onChange={handleQuizTitleChange} required
                            className='w-full p-3 input input-bordered border-black  mb-2 text-black ' />
                        <input
                            type="datetime-local"
                            placeholder="Date Of Start"
                            value={quizDate}
                            onChange={handleQuizDateChange} required
                            className='w-full p-3 input input-bordered border-black  mb-2 text-black' />

                    </div>

                    <div className=" overflow-y-scroll scroll-smooth h-80 scrollbar" >
                        {questions.map((question, index) => (
                            <div key={index} className='' >
                                <div className="flex gap-2">
                                    <input type="checkbox" onChange={(e) => handleChecked(e, question._id)} />
                                    <p className='text-black font-semibold'>{question._id}{")"}</p></div>

                                <textarea
                                    id={`question${index}`}
                                    placeholder="Question"
                                    value={question.question}
                                    onChange={(e) => handleQuestionChange(e, index)}
                                    required
                                    className='w-full p-3 input input-bordered border-black  mb-2 text-black '

                                />
                                <textarea
                                    id={`options${index}`}
                                    placeholder="Options (comma-separated)"
                                    value={question.options}
                                    onChange={(e) => handleOptionsChange(e, index)}
                                    required
                                    className='w-full p-3 h-36 input input-bordered border-black  mb-2 text-black'
                                    style={{ overflow: 'hidden', resize: 'none' }}
                                />
                                <textarea
                                    id={`correctAnswer${index}`}
                                    placeholder="Correct Answer"
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

                        <button type="submit" className='bg-[#2D80F6] shadow-lg text-white px-2 py-1'>{status}</button>
                        <button type="submit" onClick={handleReset} className=' shadow-lg bg-black text-white  px-2 py-1'>Reset</button>
                        <button type="submit" onClick={handleRemove} className=' bg-black text-white   shadow-lg  px-2 py-1'>Remove</button>
                    </div>
                </form>


                <div className='text-gray-500 border-2 p-6'>
                    <h2 className='text-sm uppercase text-center'>Previously added Quiz</h2>
                    <div className="flex flex-col gap-2">
                        {quiz ? (
                            quiz?.map((item, index) => (
                                <div key={item?.quizTitle}
                                    className="flex justify-between items-center border-2 p-2"
                                    onClick={() => handleUpdateQue(item.quizTitle)}>

                                    <div className="flex justify-between items-center w-full">
                                        <h1 className='font-bold'>{item?.quizTitle}</h1>
                                        <span>{item?.quizDate}</span>
                                        {(currentDate >= new Date(item?.quizDate) && currentDate <= new Date(new Date(item?.quizDate).getTime() + (11 * 60 * 60 * 1000) + (59 * 60 * 1000))) ? (<span className='bg-green-400 px-2 py-1 text-white'>Live</span>) : (<span className='bg-red-400 px-2 py-1 text-white'>Offline</span>)}

                                    </div>

                                </div>
                            ))
                        ) : (
                            <h1>Loading....</h1>
                        )
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddQuiz;
