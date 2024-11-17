import React, { useEffect, useState } from 'react';
import { createQuiz, deleteQuiz, getGeneratedQuiz, handleGetAllQuiz, updateQuiz } from '../../../api/quizApi';
import { AiFillDelete, AiFillEdit, AiOutlineArrowLeft, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { X } from 'lucide-react';

export const AddQuiz = () => {
    const [quizs, setQuizs] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('')
    const [updateId, setUpdateId] = useState('');
    const [std, setStd] = useState('');
    const [button, setButton] = useState('Create Quiz');
    const [questions, setQuestions] = useState([{ text: '', answers: [], correctAnswer: '' }]);
    const [submissions, setSubmissions] = useState([]);
    const [showAIPanel, setShowAIPanel] = useState(false);
    const [loading, setLoading] = useState(false)
    const [noQuiz, setNoQuiz] = useState(5)

    const handleUpdate = (quiz) => {
        setShowForm(true);
        setButton("Update Quiz");
        setUpdateId(quiz?._id);
        setTitle(quiz?.title);
        setStd(quiz?.std);
        setQuestions(quiz?.questions);
    };

    const handleDeleteQuiz = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteQuiz(id).then((res) => {
                    if (res.success) {
                        Swal.fire({
                            title: "Deleted!",
                            text: res.message,
                            icon: "success"
                        });
                        handleAllQuiz();
                    }
                });
            }
        });
    };

    const handleCreateQuiz = async (e) => {
        e.preventDefault();
        if (updateId) {
            await updateQuiz(updateId, {
                title: title,
                questions,
                std: std,
            }).then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Quiz Updated!',
                    text: 'Quiz has been updated successfully.',
                }).then(() => {
                    handleReset();
                    handleAllQuiz();
                });
            });
        } else {
            createQuiz({
                title: title,
                questions,
                std,
            }).then((data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Quiz Created!',
                    text: data.data.message,
                }).then(() => {
                    handleReset();
                    handleAllQuiz();
                });
            });
        }
    };

    const handleQuestionChange = (e, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].text = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleOptionsChange = (e, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].answers = e.target.value.split(",");
        setQuestions(updatedQuestions);
    };

    const handleCorrectAnswerChange = (e, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].correctAnswer = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleAddQuestion = () => {
        setQuestions(prev => [...prev, { text: '', answers: [], correctAnswer: '' }]);
    };

    const handleReset = () => {
        setTitle("");
        setButton('Create Quiz');
        setStd("");
        setUpdateId('');
        setQuestions([{ text: '', answers: [], correctAnswer: '' }]);
        setShowForm(false);
    };

    const handleRemove = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        if (updatedQuestions.length === 0) {
            updatedQuestions.push({ text: '', answers: [], correctAnswer: '' });
        }
        setQuestions(updatedQuestions);
    };

    const handleVisibility = async (id, x) => {
        await updateQuiz(id, {
            visibility: x
        }).then((res) => {
            handleAllQuiz();
            Swal.fire({
                icon: 'success',
                title: 'Quiz Visibility Changed!',
                text: x ? 'Now Quiz is visible on the website.' : 'Now Quiz is not visible on the website.',
            });
        });
    };

    const handleAllQuiz = () => {
        handleGetAllQuiz().then((res) => {
            setQuizs(res.quizs);
            setSubmissions(res.docs);
        }).catch((err) => console.log(err));
    };

    useEffect(() => {
        handleAllQuiz();
    }, []);

    const handleGenerateQuiz = async (content, numQuestions) => {
        setLoading(true);
        try {
            const res = await getGeneratedQuiz(content, numQuestions);
            if (res.array) {
                setQuestions(prev => [...prev, ...res.array]);
                Swal.fire({
                    icon: 'success',
                    title: 'Questions Generated!',
                    text: 'AI-generated questions have been added to your quiz.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Generation Failed',
                    text: res.message || 'Failed to generate questions.',
                });
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Generation Failed',
                text: 'An error occurred while generating questions.',
            });
        } finally {
            setLoading(false);
        }
    };




    if (showForm) {
        return (
            <div className="mt-10 flex-1 bg-gray-50 p-4">
                <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg">
                    <div className="p-6 border-b flex justify-between items-center">
                        <button
                            onClick={handleReset}
                            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            <AiOutlineArrowLeft className="mr-2" size={20} />
                            Back to Quiz List
                        </button>
                        <button
                            onClick={() => setShowAIPanel(!showAIPanel)}
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            {showAIPanel ? 'Hide AI Generator' : 'Show AI Generator'}
                        </button>
                    </div>

                    <form onSubmit={handleCreateQuiz} className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="flex flex-col">
                                <label className="mb-2 text-sm font-medium text-gray-700">Quiz Title</label>
                                <input
                                    type="text"
                                    placeholder="Enter quiz title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 text-sm font-medium text-gray-700">Standard</label>
                                <input
                                    type="text"
                                    placeholder="Enter standard"
                                    value={std}
                                    onChange={(e) => setStd(e.target.value)}
                                    required
                                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="space-y-6 max-h-[calc(100vh-400px)] overflow-y-auto pr-4">
                            {questions.map((question, index) => (
                                <div key={index} className='gap-y-10' >
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
                                </div>


                            ))}
                        </div>

                        <div className="flex gap-4 mt-8">
                            <button
                                type="button"
                                onClick={handleAddQuestion}
                                className="sm:px-6 sm:py-3 px-2 py-1 text-sm sm:text-xl bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                            >
                                Add Question
                            </button>
                            <button
                                type="submit"
                                className="sm:px-6 sm:py-3 px-2 py-1 text-sm sm:text-xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                                {button}
                            </button>
                        </div>
                    </form>



                    <AIGenerationPanel
                        onGenerate={handleGenerateQuiz}
                        loading={loading}
                        onClose={() => setShowAIPanel(false)}
                        visible={showAIPanel}
                    />

                </div>


            </div>
        );
    }

    return (
        <div className="mt-10 flex-1 justify-center bg-gray-50 p-4">
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b flex justify-between items-center">
                    <h1 className=" font-semibold text-sm sm:text-2xl text-gray-900">Quiz Management</h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="sm:px-6 sm:py-3 px-2 py-1 text-sm sm:text-md  bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Create New Quiz
                    </button>
                </div>

                <div className="sm:p-6 p-3">
                    <div className="grid grid-cols-1 gap-4">
                        {quizs?.map((quiz, index) => (
                            <div
                                key={quiz._id}
                                className="sm:p-6 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-500 transition-colors"
                            >
                                <div className="flex justify-between flex-col  items-start">
                                    <div className=" w-full flex-row">
                                        <h2 className="sm:text-xl text-sm font-semibold text-gray-900 mb-2">{quiz.title}</h2>
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => handleVisibility(quiz._id, !quiz.visibility)}
                                                className={`sm:p-2 p-1 rounded-lg transition-colors ${quiz.visibility
                                                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                                    }`}
                                                title={quiz.visibility ? 'Quiz is visible' : 'Quiz is hidden'}
                                            >
                                                {quiz.visibility ? <AiOutlineEye className='sm:h-6  h-4' size={24} /> : <AiOutlineEyeInvisible size={24} />}
                                            </button>
                                            <button
                                                onClick={() => handleUpdate(quiz)}
                                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                title="Edit quiz"
                                            >
                                                <AiFillEdit size={24} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteQuiz(quiz._id)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Delete quiz"
                                            >
                                                <AiFillDelete size={24} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full sm:text-sm">
                                            Standard: {quiz.std}
                                        </span>
                                        <span className="px-3 py-1  bg-blue-100 text-blue-800 rounded-full sm:text-sm text-xs">
                                            Submissions: {submissions[index]}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AIGenerationPanel = ({ onGenerate, loading, onClose, visible }) => {
    const [noQuiz, setNoQuiz] = useState(5);
    const [text, setText] = useState('');

    const handleSubmit = async () => {
        await onGenerate(text, noQuiz);
        setText('');
        if (window.innerWidth < 768) {
            onClose();
        }
    };

    if (!visible) return null;

    return (
        <div className="fixed md:absolute top-0 right-0 h-full md:w-[20vw] w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">AI Quiz Generator</h2>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            <div className="p-4 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Questions
                    </label>
                    <input
                        type="number"
                        value={noQuiz}
                        onChange={(e) => setNoQuiz(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter number of questions"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content
                    </label>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg h-48 focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your content here..."
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-gradient-to-br from-purple-600 to-blue-500 text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center"
                >
                    {loading && (
                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                    )}
                    Generate Questions
                </button>
            </div>
        </div>
    );
};