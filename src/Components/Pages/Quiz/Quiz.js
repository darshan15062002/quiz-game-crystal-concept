import React from 'react'

export const Quiz = ({ questions, title, count, handlePrev, handleNext, handelClose, selectedOptions, handleOptionChange, loading }) => {
    return (
        <div className=" overflow-y-auto overflow-x-hidden h-screen bg-slate-50 bg-transparent/10 fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0">
            <div className="relative p-4 w-full max-w-2xl max-h-full">

                <div className="relative bg-slate-300 rounded-lg shadow ">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-black">
                            {title}
                        </h3>
                        <button onClick={() => { }} type="button" className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className='p-6 md:p-5 space-y-4' >
                        <h1 className='text-black text-left'><b>{count + 1}{")  "}{questions[count]?.text}</b></h1>
                        <div className="answer space-y-1">

                            {
                                questions[count]?.answers?.map((item, index) => (
                                    <div
                                        onClick={() => handleOptionChange(index + 1, item)}
                                        className='text-black border cursor-pointer px-2 rounded-md border-black flex gap-4 '>
                                        <input type="radio" name="answer" id={"answer"} value={item} checked={selectedOptions[count] === index + 1} />
                                        <div key={index}>{item}</div>
                                    </div>
                                ))
                            }



                        </div>
                        <div className=" flex justify-between items-center">
                            <button className='bg-[#000000] shadow-md text-white px-2 py-1' onClick={() => handlePrev()}>{"Previous"}</button>
                            <button className='bg-[#09BD81] shadow-md text-white px-2 py-1' disabled={loading} onClick={() => handleNext()}>{count === questions.length - 1 ? "Submit" : "Next"}</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
