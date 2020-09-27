import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {nextMonth, previousMonth} from "../../redux/actions/actions";
import './month-controllers.styles.scss';

const MonthControllers = () => {
    const currentDate = useSelector(state => state.currentDate);
    const dispatch = useDispatch();

    return (
        <div className='month text-uppercase'>
            <span className='date-controllers' onClick={() => dispatch(previousMonth())}>
                &lt;
            </span>
            <span>
                {currentDate.toLocaleDateString('en-US', {month: 'long'})} {currentDate.getFullYear()}
            </span>
            <span className='date-controllers' onClick={() => dispatch(nextMonth())}>
                &gt;
            </span>
        </div>
    );
}

export default MonthControllers;