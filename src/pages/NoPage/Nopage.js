import React from 'react'
import { Link } from 'react-router-dom'

function Nopage() {
    return (
        <div className='h-screen px-10 flex flex-col justify-center items-center'>
            <img src="https://i.pinimg.com/564x/4e/19/c2/4e19c2d8da38136202aa53345057f601.jpg" alt="d" />
            <Link to='/' className='p-3 bg-black '>Go Back</Link>
        </div>
    )
}

export default Nopage