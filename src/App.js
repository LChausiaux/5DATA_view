import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Students from "./components/students.component";
import Campus from "./components/campus.component";
import Pros from "./components/pros.component";
import Landing from "./components/landing.component";

import "bootstrap/dist/css/bootstrap.min.css"
import './sass/App.scss';

function App()
{
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="logo">
                    <a href="http://google.com" className="navbar-brand">
                        {/*<img src={logo} alt="logo" width="30" height="30"/>*/}
                    </a>
                    <Link to="/" className="navbar-brand">SUPData</Link>
                </div>
                <div className="navbar-items">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/students" className="nav-link">Students</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/campus" className="nav-link">Campus</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/internship" className="nav-link">Internship</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Route path="/" exact component={ Landing } />
            <Route path="/students" exact component={ Students }/>
            <Route path="/campus" exact component={ Campus } />
            <Route path="/internship" exact component={ Pros } />
        </Router>
    );
}

export default App;
