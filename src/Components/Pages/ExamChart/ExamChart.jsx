import { ArrowBack, ArrowForward, ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
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

export default function ExamChart() {
    const formattedData = convertData(dummyExamData);
    const [currentIndex, setCurrentIndex] = useState(formattedData.length - 1);

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

    return (
        <ResponsiveContainer className={"flex bg-white justify-center items-center flex-col gap-y-3 shadow-xl rounded-md px-6"} aspect={2 / 1}>
            <h2 className="text-gray-500 font-bold text-xl">Exam Marks </h2>
            <LineChart data={subjectMarks} width={"100%"} height={500} className="">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* Render a line for each subject */}
                {Object.keys(presentTest).map((subject, index) => (
                    subject !== 'date' &&
                    <Line key={index} type="monotone" dataKey={`${subject}.marks`} name={subject}
                        stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Random color
                    />
                ))}
            </LineChart>
            <div className="flex justify-center items-center  mb-4">
                <ArrowLeft onClick={handleBackward} disabled={currentIndex === 0} />
                <ArrowRight onClick={handleForward} disabled={currentIndex === formattedData.length - 1} />
            </div>


        </ResponsiveContainer >
    );
}
