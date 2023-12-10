import React from 'react'

export const Table = ({ users }) => {

    return (

        <div className="overflow-y-scroll bg-white  no-scrollbar p-5 rounded-lg shadow-lg ">
            <table className=' w-full  border '>
                <tr className='text-black  '>
                    <th className='border-r-2 px-3 py-2  border-b '>No.</th>
                    <th className='border-r-2 px-3 py-2  border-b'>Name</th>
                    <th className='border-r-2 px-3 py-2  border-b'>Phone</th>
                    <th className='border-r-2 px-3 py-2  border-b'>Std</th>
                    <th className='border-r-2 px-3 py-2  border-b'>Location</th>




                </tr>
                {users?.map((user, index) => (
                    <tr className='text-gray-500 w-full '>
                        <th className='border-r-2 px-3 py-2  border-b  text-center  '>{index + 1}</th>
                        <td className='border-r-2 px-3 py-2  border-b  text-center '>{user?.name}</td>
                        <td className='border-r-2 px-3 py-2  border-b  text-center '>{user?.phone}</td>
                        <td className='border-r-2 px-3 py-2  border-b  text-center '>{user.std}</td>
                        <td className='border-r-2 px-3 py-2  border-b  text-center '>{user.location}</td>
                    </tr>
                ))}
            </table>



        </div>

    )
}
