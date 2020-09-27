import React from "react";
import Day from "../day/day.component";
import {daysInMonth, getEndDayOfMonth, getStartDayOfMonth, getDatesInMonth} from "../../utils/utils";
import {useSelector} from "react-redux";
import './days-grid.styles.scss';

const DaysGrid = () => {
    const currentDate = useSelector(state => state.currentDate);

    const startDay = getStartDayOfMonth(currentDate).getDay();
    const endDay = getEndDayOfMonth(currentDate);
    const dates = getDatesInMonth(currentDate, daysInMonth(currentDate) + (startDay === 0 ? 6 : startDay - 1) + (6 - endDay));
    return (
        <div className='days-grid'>
            {
                dates.map((date, index) => {
                        return (
                            //<Day key={index} day={index - (startDay - 2)}/>
                            <Day key={index} date={date}/>
                        )
                    })
            }
        </div>
    );
}

export default DaysGrid