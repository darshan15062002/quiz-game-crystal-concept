import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
function MyCalendar() {

    const presentDates = [
        new Date(2024, 0, 5), // January 5, 2024
        new Date(2024, 1, 10), // February 10, 2024
        new Date(2024, 2, 15), // March 15, 2024
        new Date(2024, 3, 20), // April 20, 2024
        // Add more dummy dates as needed
    ];

    // Function to determine if a date is present in the presentDates array
    const isDatePresent = (date) => {
        return presentDates.some(presentDate => {
            return date.getDate() === presentDate.getDate() &&
                date.getMonth() === presentDate.getMonth() &&
                date.getFullYear() === presentDate.getFullYear();
        });
    };

    // Function to customize the tile content of the calendar
    const tileClassName = ({ date }) => {

        return isDatePresent(date) ? 'present-day' : null;
    };

    return (
        <div className='bg-white shadow-xl  p-2 rounded-md flex flex-col gap-y-3 justify-center items-center' >
            <h2 className='text-gray-500 font-bold text-xl'>Attendance</h2>
            <Calendar
                className=""
                tileClassName={tileClassName}
            />
        </div>
    );
}

export default MyCalendar;
