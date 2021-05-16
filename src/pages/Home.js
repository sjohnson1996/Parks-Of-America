import React, { useEffect, useState } from "react";
import '../App.css';
import flag from '../images/flag.svg';

const Home = (props) => {
    
    useEffect(() => {
        props.grabRoute(props.match.path);
    }, [])
    
    return (
        <div>
            <h1 className="welcome-style">Welcome To...</h1>
            <h1 className="parks-of-america">Parks of America</h1>
            <p className="intro-style">With a total of 467 national parks across the United States, there is no shortage of opportunities to experience the natural beauty of this country. Take a journey across the Parks of America from the comfort of your home and get inspired to get outdoors!</p>
            <img className="flag-style" src={flag} alt="American Flag"/>
        </div>
    );
}

export default Home;
