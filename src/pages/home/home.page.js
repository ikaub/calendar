import React from "react";
import {Row, Col} from "react-bootstrap";
import './home.page.styles.scss';
import CalendarImage from "../../components/calendar-image/calendar-image.component";
import Calendar from "../../components/calendar/calendar.component";

const HomePage = () => {
    return (
        <Row>
            <Col xs={8} className='p-0 m-0'>
                <CalendarImage />
            </Col>
            <Col className='p-0 m-0'>
                <Calendar />
            </Col>
        </Row>
    );
}

export default HomePage;