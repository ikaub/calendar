import React from "react";
import './day.styles.scss';
import {daysInMonth, isToday} from "../../utils/utils";
import {useSelector} from "react-redux";

const Day = ({day}) => {
    const currentDate = useSelector(state => state.currentDate);
    const notCurrentMonth = day <= 0 || day > daysInMonth(currentDate);
    const prevMonthLength = daysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));

    const renderDay = (day) => {
        if (day > 0 && day <= daysInMonth(currentDate))
            return ("0" + day).slice(-2);
        if (day <= 0)
            return prevMonthLength + day;
        if (day > daysInMonth(currentDate))
            return ("0" + (day - daysInMonth(currentDate))).slice(-2);
    }

    return (
        <span className={
            `text-center month-day 
            ${notCurrentMonth ? 'text-muted' : ''}
            ${isToday(day, currentDate.getMonth(), new Date()) ? 'today bg-warning text-dark' : ''}`
        } key={day}>{renderDay(day)}
        </span>
    )
}

export default Day;