import React from "react";
import './day.styles.scss';
import {useDispatch, useSelector} from "react-redux";
import {displayDateData, showPopup} from "../../redux/actions/actions";
import Popup from "../popup/popup.component";
import {isToday} from "../../utils/utils";

const Day = ({date}) => {
    const dispatch = useDispatch();
    const currentDate = useSelector(state => state.currentDate);
    const notCurrentMonth = date.getMonth() !== currentDate.getMonth();

    const handleClick = (event) => {
        dispatch(displayDateData(date.toLocaleDateString('en-US', {month: 'long'}),
            date.getDate(),
            date.toLocaleDateString('en-US', {weekday: 'long'}))
        );
        dispatch(showPopup(true));
    }

    return (
        <div
            className={
                `text-center month-day 
            ${notCurrentMonth ? 'text-muted' : ''}
            ${isToday(date.getDate(), currentDate.getMonth(), new Date()) ? 'bg-warning text-dark' : ''}`
            }
            key={date.getTime()}
            onClick={handleClick}
        >
            {("0" + date.getDate()).slice(-2)}
            <Popup />
        </div>
    )
}

export default Day;