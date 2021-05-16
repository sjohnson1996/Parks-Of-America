import React, { useEffect, useState } from "react";
import '../App.css';

const AllParks = (props) => {
    
    useEffect(() => {
        props.grabRoute(props.match.path);
    }, [])

    return (
        <div>
            <h1>All Parks</h1>
        </div>
    );
}

export default AllParks;