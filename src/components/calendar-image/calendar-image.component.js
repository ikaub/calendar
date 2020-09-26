import React from "react";
import './calendar-image.styles.scss';

const CalendarImage = () => {
    return (
        <div className='calendar-image'>
            <p className='h1 text-uppercase text-warning font-weight-bold calendar-image-header mb-5'>
                Choose the day for the meeting
            </p>
            <p className='text-white-50 calendar-image-description m-0'>
                We encourage you to book your appointment online.
            </p>
            <p className='text-white-50 calendar-image-description m-0'>
                This will save your time.
            </p>
        </div>
    );
}

export default CalendarImage;