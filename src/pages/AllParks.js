import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import dotenv from 'dotenv';

dotenv.config()

const AllParks = (props) => {

    const key = process.env.REACT_APP_API_KEY;

    const [parks, setParks] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [resultsNum, setResultsNum] = useState(0);
    
    useEffect(() => {
        props.grabRoute(props.match.path);
        axios.get(`https://developer.nps.gov/api/v1/parks?start=${resultsNum}&api_key=${key}`)
            .then(res => {
                console.log(res.data);
                setTotalResults(res.data.total)
                setParks(res.data);
            })
    }, [resultsNum]);

    const next = () => {
        setResultsNum(resultsNum + 50);
    }

    const previous = () => {
        setResultsNum(resultsNum - 50);
    }

    return (
        <div>
            <h1 className="all-parks-title">All Parks</h1>
            {(resultsNum > 50) ? 
                <button onClick={previous}>Previous</button>
            : null}
            {(resultsNum < totalResults - 50) ? 
                <button onClick={next}>Next</button>
            : null}
        </div>
    );
}

export default AllParks;