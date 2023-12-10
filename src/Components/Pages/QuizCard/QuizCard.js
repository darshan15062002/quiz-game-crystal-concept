import React from 'react'
import { Link } from 'react-router-dom'

export const QuizCard = ({ item, handlePlay }) => {
    return (
        <div className="md:w-96 w-full md:py-8 md:px-10 px-6 py-5  rounded-lg bg-slate-300 mx-2  flex flex-col justify-center gap-2 " key={item._id}>

            <h2 className="text-black text-center pt-1  font-bold  ">
                {item?.title}
            </h2>
            <p className="  text-gray-900 tracking-wide ">
                <b>Started At:</b> {new Date(new Date(item?.createdAt).getTime() - (5 * 60 * 60 * 1000 + 30 * 60 * 1000)).toLocaleString()}
            </p>
            <p className="  text-gray-900 tracking-wide ">

                <p>
                    <b>Number of Questions:</b> {item?.questions?.length}
                </p>
                <p>
                    <b>Marks per Question:</b> 1
                </p>
            </p>

            <div className="flex justify-center gap-4   text-xs font-medium">
                <Link className="text-gray-500 bg-slate-50 shadow-md  px-6 py-3">
                    Live
                </Link>
                <Link className="bg-[#09BD81] shadow-md text-white px-6 py-3" onClick={() => handlePlay(item._id)}>
                    Play
                </Link>
            </div>
        </div>
    )
}
