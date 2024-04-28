import { ArrowBack, ArrowForward, ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar
} from "recharts";

const dummyExamData = [
    { subject: 'Math', date: '2023-01-01', marks: 85, outOf: 100 },
    { subject: 'Math', date: '2023-01-15', marks: 78, outOf: 100 },
    { subject: 'Math', date: '2023-02-01', marks: 90, outOf: 100 },
    { subject: 'Math', date: '2023-02-15', marks: 40, outOf: 100 },
    { subject: 'Physics', date: '2023-01-01', marks: 75, outOf: 100 },

    { subject: 'Physics', date: '2023-02-01', marks: 85, outOf: 100 },
    { subject: 'Physics', date: '2023-02-15', marks: 82, outOf: 100 },
    { subject: 'History', date: '2023-01-01', marks: 20, outOf: 100 },
    { subject: 'History', date: '2023-01-07', marks: 20, outOf: 100 },
    { subject: 'History', date: '2023-01-03', marks: 20, outOf: 100 },
    { subject: 'History', date: '2023-01-04', marks: 20, outOf: 100 },
    { subject: 'History', date: '2023-02-02', marks: 72, outOf: 100 },
    { subject: 'Hindi', date: '2023-02-15', marks: 78, outOf: 100 },
    { subject: 'Geography', date: '2023-01-01', marks: 80, outOf: 100 },
    { subject: 'English', date: '2023-01-15', marks: 85, outOf: 100 },

    { subject: 'Geography', date: '2023-02-15', marks: 82, outOf: 100 },
];

function convertData(dummyData) {
    const formattedData = dummyData.reduce((acc, curr) => {
        const { subject, date, marks, outOf } = curr;
        if (!acc[date]) {
            acc[date] = { date };
        }
        if (!acc[date][subject]) {
            acc[date][subject] = { marks, outOf };
        }

        return acc;
    }, {});

    return Object.values(formattedData);
}

export default function ExamChart({ id }) {
    const formattedData = convertData(dummyExamData);
    const [currentIndex, setCurrentIndex] = useState(formattedData.length - 1);
    console.log(formattedData);
    const handleBackward = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleForward = () => {
        if (currentIndex < formattedData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Filter exam data for the last five tests before the present test
    const presentTest = formattedData[currentIndex];
    const startIndex = currentIndex >= 4 ? currentIndex - 4 : 0;
    const subjectMarks = formattedData.slice(startIndex, currentIndex + 1);
    const colors = ['#82ca9d', '#8884d8', '#ffc658', '#ff7300', '#00C49F', '#FFD700', '#FF5733', '#C70039'];
    return (
        <ResponsiveContainer className={"flex relative bg-white justify-center pt-3 items-center flex-col gap-y-6 shadow-xl rounded-md px-6"} aspect={2 / 1}>
            <h2 className="text-gray-500  font-bold text-xl">Exam Marks </h2>
            <Link to={`/admin/students/marks/${id}`} className=" absolute border right-5 top-2 px-2 py-1 border-green-600 rounded-md text-green-600">
                Add New
            </Link>
            <BarChart data={subjectMarks} className="">
                <CartesianGrid strokeDasharray={3} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                {/* Render a bar for each subject */}
                {Object.keys(presentTest).map((subject, index) => (
                    subject !== 'date' &&
                    <Bar key={index} dataKey={`${subject}.marks`} name={subject}
                        fill={colors[index % colors.length]}
                    />
                ))}
            </BarChart>
            <div className="flex justify-center items-center  mb-4">
                <ArrowLeft onClick={handleBackward} disabled={currentIndex === 0} />
                <ArrowRight onClick={handleForward} disabled={currentIndex === formattedData.length - 1} />
            </div>


        </ResponsiveContainer >
    );
}

function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 text-xs rounded-md flex flex-col justify-center items-start gap-y-1  shadow-md">
                <p className="">{`Date: ${payload[0].payload.date}`}</p>

                {payload.map((entry, index) => (
                    <p key={index} className="">
                        {`${entry.dataKey.split('.')[0]}: ${entry.value} out of ${entry.payload[`${entry.dataKey.split('.')[0]}`].outOf}`}
                    </p>
                ))}
            </div>
        );
    }

    return null;
}
