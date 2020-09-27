import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import './popup.styles.scss';
import {selectMonth, showPopup} from "../../redux/actions/actions";

const Popup = () => {
    const show = useSelector(state => state.showPopup);
    const {month, dayNumber, weekDay} = useSelector(state => state.dayInfo);
    const dispatch = useDispatch();

    const [inputData, setInputData] = useState({
        month: '',
        day: ''
    });

    const handleHide = () => {
        if (inputData.month.length) {
            const newDate = Date.parse(inputData.month + "1, 2020");
            if(!isNaN(newDate)) {
                dispatch(selectMonth(new Date(newDate).getMonth()))
            }
        }
        dispatch(showPopup(false));
    }

    const handleChange = (event) => {
        setInputData({...inputData, [event.target.name]: event.target.value});
    }

    return (
        <div onClick={e => e.stopPropagation()}>
            <Modal show={show} onHide={handleHide} centered>
                <Modal.Header closeButton/>
                <Modal.Body className='popup'>
                    <div className='popup-input'>
                        <label className='text-muted'>Month</label>
                        <input
                            type='text'
                            placeholder={month}
                            value={inputData.month}
                            name='month'
                            onChange={handleChange}
                            size={15}
                        />
                    </div>
                    <div className='popup-input'>
                        <label className='text-muted'>Day</label>
                        <input
                            type='text'
                            placeholder={`${dayNumber}th ${weekDay}`}
                            value={inputData.day}
                            name='day'
                            onChange={handleChange}
                            size={15}
                        />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Popup;