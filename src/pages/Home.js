import React, { useEffect, useState } from "react";
import '../App.css';

const Home = (props) => {
    
    useEffect(() => {
        props.grabRoute(props.match.path);
    }, [])
    
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
