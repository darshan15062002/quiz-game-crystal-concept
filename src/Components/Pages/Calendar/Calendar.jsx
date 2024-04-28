import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
function MyCalendar({ attendance }) {


    // Function to determine if a date is present in the presentDates array
    const isDatePresent = (date) => {
        return attendance?.some(presentDate => {
            let newDate = new Date(presentDate)
            return date.getDate() === newDate.getDate() &&
                date.getMonth() === newDate.getMonth() &&
                date.getFullYear() === newDate.getFullYear();
        });
    };

    // Function to customize the tile content of the calendar
    const tileClassName = ({ date }) => {

        return isDatePresent(date) ? 'present-day' : null;
    };

    return (
        <div className='bg-white shadow-xl  p-2 rounded-xl flex flex-col gap-y-3 justify-center items-center' >
            <h2 className='text-gray-500 font-bold text-xl'>Attendance</h2>
            <Calendar
                className=""
                tileClassName={tileClassName}
            />
        </div>
    );
}

export default MyCalendar;
