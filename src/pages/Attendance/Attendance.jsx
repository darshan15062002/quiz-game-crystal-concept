import React, { useEffect } from 'react';
import { DataGrid, GridToolbar, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getAllStudents } from '../../api/authApi';
import { addStudentinfo } from '../../api/studentApi';
import { Box } from '@mui/material';

const Attendance = () => {
    const [loading, setLoading] = useState(false);
    const [students, setStudents] = useState([]);
    const [attendanceStatus, setAttendanceStatus] = useState({});

    useEffect(() => {
        setLoading(true);
        getAllStudents().then((res) => {
            setLoading(false);
            const studentsWithSequentialId = res.student.map((student, index) => ({
                ...student,
                id: index + 1, // Assign sequential numeric IDs starting from 1
            }));
            setStudents(studentsWithSequentialId);
        });
    }, []);

    const userColumns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'std', headerName: 'Std', width: 100 },
    ];

    const handlePresent = async (id) => {
        setLoading(true);
        const date = new Date();
        await addStudentinfo(id, null, date)
            .then((data) => {
                if (data.success) {
                    setAttendanceStatus({
                        ...attendanceStatus,
                        [id]: data.status ? 'present' : 'absent',
                    });
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        setLoading(false);
    };

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => (
                <div className="cellAction">
                    <Link to={`/admin/students/single/${params.row._id}`} style={{ textDecoration: 'none' }}>
                        <div className="viewButton">View</div>
                    </Link>
                    <button
                        disabled={loading}
                        className={`presentButton ${attendanceStatus[params.row._id] === 'present'
                            ? 'py-[2px] px-[5px] rounded-md text-green-400 border border-green-400'
                            : 'py-[2px] px-[5px] rounded-md border border-red-400 text-red-400'
                            }`}
                        onClick={() => handlePresent(params.row._id)}
                    >
                        {attendanceStatus[params.row._id] === 'present' ? 'Present' : 'Absent'}
                    </button>
                </div>
            ),
        },
    ];

    function QuickSearchToolbar() {
        return (
            <Box
                sx={{
                    p: 0.5,
                    pb: 0,
                }}
            >
                <GridToolbarQuickFilter
                    quickFilterParser={(searchInput) =>
                        searchInput
                            .split(',')
                            .map((value) => value.trim())
                            .filter((value) => value !== '')
                    }
                />
            </Box>
        );
    }


    return (
        <div className="datatable pt-20" style={{ width: '100%', overflowX: 'auto' }}>
            <div className="datatableTitle">Attendance</div>

            <DataGrid
                className="bg-white "
                rows={students}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                slots={{ toolbar: QuickSearchToolbar }}

                disableRowSelectionOnClick
                disableDensitySelector
                disableColumnSelector
            />


        </div>
    );
};

export default Attendance;
