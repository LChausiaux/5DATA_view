import React, {Component} from "react";
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Link} from "react-router-dom";

import logo from '../img/logo.png';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.changeTab = this.changeTab.bind(this);

        this.state = {
            tab: 'none'
        };
    }

    changeTab(e, newTab) {
        this.setState({
            tab: newTab
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="logo">
                    <div className="navbar-brand">
                        <img src={logo} alt="logo"/>
                    </div>
                    <Link to="/" className="navbar-brand">SUPData</Link>
                </div>
                <div className="navbar-items">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/students" className={"nav-link " + (this.state.tab === 'students' ? 'active' : '')} onClick={(e) => this.changeTab(e ,'students')}>Students</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/campus" className={"nav-link " + (this.state.tab === 'campus' ? 'active' : '')} onClick={(e) => this.changeTab(e ,'campus')}>Campus</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/internship" className={"nav-link " + (this.state.tab === 'internship' ? 'active' : '')} onClick={(e) => this.changeTab(e ,'internship')}>Internship</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}