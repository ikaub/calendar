import React from "react";
import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from '../../assets/Logo original RGB.svg';
import './header.styles.scss';

const Header = () => {
    return (
        <Row className='align-items-center text-uppercase font-weight-bold header'>
            <Col xs={2}>
                <img src={logo} alt=''/>
            </Col>
            <Col xs={{offset: 6, span: 2}}>
                <Link className='text-secondary' to='/'>Home</Link>
            </Col>
            <Col xs={{span: 2}}>
                <Link className='text-secondary' to='/about-us'>About Us</Link>
            </Col>
        </Row>
    );
}

export default Header;