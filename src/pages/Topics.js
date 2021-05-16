import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import dotenv from 'dotenv';

const Topics = (props) => {

    useEffect(() => {
        props.grabRoute(props.match.path);
    }, [])

    return (
        <div>
            <h1>Topics</h1>
        </div>
    );
}

export default Topics;