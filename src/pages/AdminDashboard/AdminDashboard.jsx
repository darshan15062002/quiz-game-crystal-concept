
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllUsers } from '../../api/authApi';
import { AddQuiz } from '../../Components/Pages/AddQuiz/AddQuiz';
import { Table } from '../../Components/Pages/Table/Table';
import Widget from '../../Components/Pages/Widgets/Widget';
import Chart from '../../Components/Pages/Chart/Chart';
import AdminFeatured from '../../Components/Pages/AdminFeature/AdminFeature';

const AdminDashboard = () => {


    const navigate = useNavigate()
    const [noOfUsers, setNoOfUsers] = useState()
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)




    useEffect(() => {
        setLoading(true)
        getAllUsers(page).then((res) => {
            setLoading(false)
            setNoOfUsers(res.userCount);
            setUsers(res.users)
        })
    }, [page, setPage]);
    return (
        <div className='w-full pt-20 h-full px-6 '>
            <div className="flex flex-wrap  gap-4 mb-10">
                <Widget type="user" amount={noOfUsers} />
                <Widget type="students" amount={noOfUsers} />
                <Widget type="earning" amount={noOfUsers} />
                <Widget type="total" amount={noOfUsers} />
            </div>
            <div className="flex flex-col sm:flex-row  gap-5 ">
                <AdminFeatured />
                <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div>


        </div>

    )
}

export default AdminDashboard