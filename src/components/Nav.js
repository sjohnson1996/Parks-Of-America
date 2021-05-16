import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Nav = (props) => {

    return (
        <div className="nav-style">
            <Link style={{textDecoration: 'none', color: '#66cc00'}} to="/">
                <h2 className={`nav-title-style ${(props.currentRoute === '/' ? 'active-link' : '')}`}>Home</h2>
            </Link>
            <Link style={{textDecoration: 'none', color: '#66cc00'}} to ="/allparks">
                <h2 className={`nav-title-style ${(props.currentRoute === '/allparks' ? 'active-link' : '')}`}>All Parks</h2>
            </Link>
        </div>
    );
}

export default Nav;