import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Students from "./components/students.component";
import Campus from "./components/campus.component";
import Pros from "./components/pros.component";
import Landing from "./components/landing.component";
import Navbar from "./components/navbar.component";

import "bootstrap/dist/css/bootstrap.min.css"
import './sass/App.scss';

function App()
{

    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={Landing} />
            <Route path="/students" exact component={Students} />
            <Route path="/campus" exact component={Campus} />
            <Route path="/internship" exact component={Pros} />
        </Router>
    );
}

export default App;
