export const Table = ({ users, page = 1 }) => {
    const startNumber = (page - 1) * 10 + 1;

    return (
        <div className="bg-white overflow-x-scroll px-4 no-scrollbar p-5 rounded-lg shadow-lg">
            <table className='w-full overflow-x-scroll border'>
                <thead>
                    <tr className='text-black'>
                        <th className='border-r-2 px-3 py-2 border-b'>No.</th>
                        <th className='border-r-2 px-3 py-2 border-b'>Name</th>
                        <th className='border-r-2 px-3 py-2 border-b'>Phone</th>
                        <th className='border-r-2 px-3 py-2 border-b'>Std</th>
                        <th className='border-r-2 px-3 py-2 border-b'>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => (
                        <tr key={user._id} className='text-gray-500 w-full'>
                            <th className='border-r-2 px-3 py-2 border-b text-center'>
                                {startNumber + index}
                            </th>
                            <td className='border-r-2 px-3 py-2 border-b text-center'>{user?.name}</td>
                            <td className='border-r-2 px-3 py-2 border-b text-center'>{user?.phone}</td>
                            <td className='border-r-2 px-3 py-2 border-b text-center'>{user.std}</td>
                            <td className='border-r-2 px-3 py-2 border-b text-center'>{user.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}