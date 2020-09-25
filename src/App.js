import React from 'react';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/home/home.page";
import AboutUsPage from "./pages/about-us/about-us.page";
import Header from "./components/header/header.component";
import {Container} from "react-bootstrap";
import './basic.styles.scss';

function App() {
    return (
        <Switch>
            <Container fluid>
                <Header/>
                <Route path='/' exact component={HomePage}/>
                <Route path='/about-us' component={AboutUsPage}/>
            </Container>
        </Switch>
    );
}

export default App;
