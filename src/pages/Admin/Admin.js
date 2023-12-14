import React, { useEffect, useState } from 'react';

import ideabg8 from '../../assets/ideabg8.png'
import { BsFillCaretLeftFill } from 'react-icons/bs';
import './AddQuiz.scss'
import { useNavigate } from 'react-router-dom';
import { getAllUsers } from '../../api/authApi';
import { AddQuiz } from '../../Components/Pages/AddQuiz/AddQuiz';
import { Table } from '../../Components/Pages/Table/Table';


const Admin = () => {
    const navigate = useNavigate()
    const [noOfUsers, setNoOfUsers] = useState()
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('name')
    const [searchPage, setSearchPage] = useState(1)

    const handleSearch = (e) => {
        e.preventDefault()
        setLoading(true)
        getAllUsers(searchPage, query === 'location' ? "city" : query, search).then((res) => {
            setLoading(false)
            setNoOfUsers(res.userCount);
            setUsers(res.users)
        }).catch((err) => {
            setLoading(false)
        })

    }

    useEffect(() => {
        setLoading(true)
        getAllUsers(page).then((res) => {
            setLoading(false)
            setNoOfUsers(res.userCount);
            setUsers(res.users)
        })
    }, [page, setPage]);



    return (
        <div className='bg-slate-200 h-full pb-6'>
            <div className="lg:px-24 pt-12 px-6  ">
                <div className='flex justify-start items-center text-gray-500 text-sm font-semibold underline'>
                    <BsFillCaretLeftFill></BsFillCaretLeftFill>
                    <div className='text-lg cursor-pointer font-mono mb-5 text-gray-700' onClick={() => { navigate('/') }}>Back</div>
                </div>

            </div>
            <div className="w-full mt-10 px-6 h-52 flex md:flex-row justify-between flex-col gap-10">
                <div className="bg-blue-400 w-full shadow-lg p-4  rounded-lg h-full ">
                    <h1 className='font-sans font-bold text-white text-2xl  '>Number Of Student</h1>
                    <span className='text-5xl text-white font-extrabold '>{noOfUsers}</span>
                </div>

            </div>
            <div className='w-full px-6 py-10 h-full '>
                <form className='  mb-10  w-full mx-2 flex justify-center items-center   '>
                    <div className=" relative group/item ">
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex gap-3  z-10  items-center py-4 rounded-l-md px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border  rounded-s-lg  " type="button">{query}
                            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></button>

                        <div id="dropdown" class="z-10 top-12 group-hover/item:visible invisible absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button type="button" onClick={() => setQuery("name")} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Name</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setQuery("phone")} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Phone</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setQuery("std")} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Std</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setQuery("location")} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Location</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative sm:w-[50%] w-full ">

                        <input type="search" onChange={(e) => setSearch(e.target.value)} value={search} id=" default-search" className=" relative  block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-r-md bg-gray-50" placeholder="Search here....." required />
                        <button
                            onClick={(e) => handleSearch(e)}
                            className="absolute top-1 right-2 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span className=" px-2.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Search
                            </span>
                        </button>
                    </div>
                </form>
                {loading ? (
                    <div className="flex flex-col gap-3 h-[90vh]  justify-center items-center ">
                        <div role="status">
                            <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : <Table users={users} />}


                <div className="flex w-full justify-end gap-3 mt-2 mr-3">
                    {(page !== 1 || (search && searchPage !== 1)) && (
                        <button
                            className='px-3 py-2 bg-black text-white'
                            onClick={(e) => (search ? (setSearchPage((prev) => prev - 1), handleSearch(e)) : setPage((prev) => prev - 1))}
                        >
                            Prev
                        </button>
                    )}
                    <span className='border py-1 px-3 text-black'>{search ? searchPage : page}</span>
                    <button
                        className='px-3 py-2 bg-black text-white'
                        onClick={(e) => (search ? (setSearchPage((prev) => prev + 1), handleSearch(e)) : setPage((prev) => prev + 1))}
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className="lg:px-24 pt-12 px-6  ">
                <h2 className='text-3xl font-semibold mb-5 text-gray-700'>Create Quiz</h2>
            </div>
            <AddQuiz className='bg-white' />



        </div>
    );
};

export default Admin;
