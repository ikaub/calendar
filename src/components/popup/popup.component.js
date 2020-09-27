import React from "react";
import {Modal} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import './popup.styles.scss';
import {showPopup} from "../../redux/actions/actions";

const Popup = () => {
    const show = useSelector(state => state.showPopup);
    const {month, dayNumber, weekDay} = useSelector(state => state.dayInfo);
    const dispatch = useDispatch();

    const handleHide = () => {
        dispatch(showPopup(true))
    }

    return (
        <div onClick={e => e.stopPropagation()}>
            <Modal show={show} onHide={handleHide} centered>
                <Modal.Header closeButton/>
                <Modal.Body className='popup'>
                    <div className='popup-input'>
                        <label className='text-muted'>Month</label>
                        <input type='text' placeholder={month}/>
                    </div>
                    <div className='popup-input'>
                        <label className='text-muted'>Day</label>
                        <input type='text' placeholder={`${dayNumber}th ${weekDay}`}/>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Popup;