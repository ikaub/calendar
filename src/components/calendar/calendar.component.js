import React, {useState} from "react";
import './calendar.styles.scss';
import DaysGrid from "../days-grid/days-grid.component";
import MonthControllers from "../month-controllers/month-controllers.component";

const Calendar = () => {

    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div className='calendar-wrapper bg-dark'>
            <div className='calendar text-white'>
                <MonthControllers />
                <DaysGrid />
                <div className='weekdays'>
                    {weekDays.map((day, index) => (
                        <span className='text-center' key={index}>{day}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calendar;