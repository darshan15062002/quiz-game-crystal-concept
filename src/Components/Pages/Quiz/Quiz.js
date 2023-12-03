import React from 'react'

export const Quiz = ({ questions, count, handlePrev, handleNext, selectedOptions, handleOptionChange, loading }) => {
    return (

        <div className='sm:w-96 w-full h-full  p-6 border-2 mx-2 rounded-lg rounded-t-none flex gap-5 flex-col justify-center   bg-white' >
            <h1 className='text-black text-left'><b>{count + 1}{")  "}{questions[count]?.text}</b></h1>
            <div className="answer">

                {
                    questions[count]?.answers?.map((item, index) => (
                        <div className='text-black border px-2 rounded-md border-black flex gap-4 '>
                            <input type="radio" name="answer" id={"answer"} value={item} checked={selectedOptions[count] === index + 1} onChange={(e) => handleOptionChange(index + 1, item)} />
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
    )
}
