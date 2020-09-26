import React from "react";
import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from '../../assets/Logo original RGB.svg';
import './header.styles.scss';

const Header = () => {
    return (
        <Row className='align-items-center text-uppercase font-weight-bold header'>
            <Col xs={5} md={3} lg={2}>
                <img src={logo} alt=''/>
            </Col>
            <Col xs={3} md={{offset: 4, span: 2}} lg={{offset: 7, span: 1}}>
                <Link className='text-secondary' to='/'>Home</Link>
            </Col>
            <Col xs={4} md={3} lg={2}>
                <Link className='text-secondary' to='/about-us'>About Us</Link>
            </Col>
        </Row>
    );
}

export default Header;