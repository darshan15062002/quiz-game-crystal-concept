import React, { useEffect } from 'react'
import "./Attendance.scss";
import { DataGrid } from "@mui/x-data-grid";

import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteUser, getAllStudents } from '../../api/authApi';
import Swal from 'sweetalert2';
import { addStudentinfo } from '../../api/studentApi';

const Attendance = () => {

    const [loading, setLoading] = useState(false)
    const [students, setStudents] = useState([])
    const [attendanceStatus, setAttendanceStatus] = useState({});


    console.log(attendanceStatus, "Student");


    useEffect(() => {
        setLoading(true)
        getAllStudents().then((res) => {
            setLoading(false)
            const studentsWithSequentialId = res.student.map((student, index) => ({
                ...student,
                id: index + 1, // Assign sequential numeric IDs starting from 1
            }));
            setStudents(studentsWithSequentialId);
        })
    }, []);




    const userColumns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "name",
            headerName: "Name",
            width: 200,

        },


        {
            field: "std",
            headerName: "Std",
            width: 100,
        },


    ];



    const handlePresent = async (id) => {
        setLoading(true);

        const date = new Date()

        await addStudentinfo(id, null, date).then((data) => {

            if (data.success) {

                setAttendanceStatus({
                    ...attendanceStatus,
                    [id]: data.status ? 'present' : 'absent'
                });

                setLoading(false);
            }
        }).catch((error) => {
            console.log(error);
        })
        setLoading(false);



    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",

            width: 200,
            renderCell: (params) => {

                return (
                    <div className="cellAction">
                        <Link to={`/admin/students/single/${params.row._id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <button disabled={loading}
                            className={` ${attendanceStatus[params.row._id] === 'present' ? "presentButton text-green-400 border  border-green-400  " : " presentButton border  border-red-400 text-red-400"}`}
                            onClick={() => handlePresent(params.row._id)}
                        >
                            {attendanceStatus[params.row._id] === 'present' ? 'Present' : 'Absent'}

                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable  pt-20">
            <div className="datatableTitle">
                Attendance
            </div>
            <div className="overflow-scroll md:overflow-hidden  ">
                <DataGrid
                    className="bg-white w-full"
                    rows={students}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}

                />
            </div>

        </div>
    )
}

export default Attendance