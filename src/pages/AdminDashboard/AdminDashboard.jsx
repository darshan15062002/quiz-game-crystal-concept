
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllUsers } from '../../api/authApi';
import { AddQuiz } from '../../Components/Pages/AddQuiz/AddQuiz';
import { Table } from '../../Components/Pages/Table/Table';
import Widget from '../../Components/Pages/Widgets/Widget';
import Chart from '../../Components/Pages/Chart/Chart';
import AdminFeatured from '../../Components/Pages/AdminFeature/AdminFeature';
import { getDashboard } from '../../api/dashboardApi';

const AdminDashboard = () => {


    const [noOfStudents, setNoOfStudents] = useState(0)
    const [noOfUsers, setNoOfUsers] = useState(0)
    const [each, setEach] = useState([])
    const [totalRevenue, setTotalRevenue] = useState(0)

    const [loading, setLoading] = useState(false)




    useEffect(() => {
        setLoading(true)
        getDashboard().then((res) => {
            console.log(res);
            setNoOfUsers(res.userCount)
            setNoOfStudents(res.studentsCount)
            setEach(res.eachStdCount)
            setTotalRevenue(res.totalrevenue)
        })
    }, []);


    return (
        <div className='w-full pt-20 h-full px-6 '>
            <div className="flex flex-wrap  gap-4 mb-10">
                <Widget type="user" amount={noOfUsers} />
                <Widget type="students" amount={noOfStudents} />
                <Widget type="earning" amount={totalRevenue} />
                <Widget type="total" amount={totalRevenue} />
            </div>
            <div className="flex flex-col sm:flex-row  gap-5 ">
                <AdminFeatured each={each} noOfStudents={noOfStudents} />
                <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div>


        </div>

    )
}

export default AdminDashboard