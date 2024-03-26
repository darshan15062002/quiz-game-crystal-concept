import React, { useEffect } from 'react'
import "./Students.scss";
import { DataGrid } from "@mui/x-data-grid";

import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteUser, getAllStudents } from '../../api/authApi';
import Swal from 'sweetalert2';

const Students = () => {

    const [loading, setLoading] = useState(false)
    const [students, setStudents] = useState([])






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


    console.log(students);

    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "name",
            headerName: "Name",
            width: 230,
            // renderCell: (params) => {
            //     return (
            //         <div className="cellWithImg">
            //             {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
            //             {params.row.username}
            //         </div>
            //     );
            // },
        },
        {
            field: "phone",
            headerName: "Phone",
            width: 230,
        },

        {
            field: "std",
            headerName: "Std",
            width: 100,
        },

        {
            field: "location",
            headerName: "Location",
            width: 160,

        },
    ];



    const handleDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(id).then((res) => {
                    if (res.success) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })

            }
        });

    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                console.log(params.row._id);
                return (
                    <div className="cellAction">
                        <Link to={`/admin/students/single/${params.row._id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row._id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable  pt-20">
            <div className="datatableTitle">
                Add New Students
                <Link to="/admin/students/new" className="link">
                    Add New
                </Link>
            </div>
            <div className="overflow-scroll md:overflow-hidden  ">
                <DataGrid
                    className="bg-white w-full"
                    rows={students}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>

        </div>
    )
}

export default Students