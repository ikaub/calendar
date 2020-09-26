import React from "react";
import Day from "../day/day.component";
import {daysInMonth, getEndDayOfMonth, getStartDayOfMonth} from "../../utils/utils";
import {useSelector} from "react-redux";
import './days-grid.styles.scss';

const DaysGrid = () => {
    const currentDate = useSelector(state => state.currentDate);

    const startDay = getStartDayOfMonth(currentDate);
    const endDay = getEndDayOfMonth(currentDate);
    return (
        <div className='days-grid'>
            {
                Array(daysInMonth(currentDate) + (startDay - 1) + (6 - endDay))
                    .fill(null)
                    .map((_, index) => {
                        return (
                            <Day index={index} startDay={startDay}/>
                        )
                    })
            }
        </div>
    );
}

export default DaysGrid