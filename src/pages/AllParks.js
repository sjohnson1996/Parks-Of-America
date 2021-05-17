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
    const [parkClick, setParkClick] = useState(null);
    const [park, setPark] = useState(null);
    
    useEffect(() => {
        props.grabRoute(props.match.path);
        axios.get(`https://developer.nps.gov/api/v1/parks?start=${resultsNum}&api_key=${key}`)
            .then(res => {
                setTotalResults(res.data.total)
                setParks(res.data);
            })
    }, [resultsNum]);

    useEffect(() => {
        if (parkClick) {
            axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${parkClick}&api_key=${key}`)
                .then(res => {
                    setPark(res.data.data[0]);
                })
        }
    }, [parkClick])

    const next = () => {
        setResultsNum(resultsNum + 50);
        window.scrollTo(0, 0)
    }

    const previous = () => {
        setResultsNum(resultsNum - 50);
        window.scrollTo(0, 0)
    }

    const onParkClick = (parkCode) => {
        setParkClick(parkCode);
    }

    // console.log(parks.data);

    return (
        <div>
            {(!parkClick) ? 
                <div>
                    <h1 className="all-parks-title">All Parks</h1>

                    {(parks.data) ? 
                        <div className="parks-grid">
                            {parks.data.map((park, i) => {
                                return <div className="park-card" key={i} onClick={() => onParkClick(park.parkCode)}>
                                        {(park.images[0]) ? 
                                            <div className="card-background-image" style={{ backgroundImage: `url(${park.images[0].url})` }}></div>
                                        : null}
                                        <h2 className="park-name">{park.name}</h2>
                                        <h2 className="designation">{park.designation}</h2>
                                        <h2 className="park-states">{park.states}</h2>
                                    </div>
                            })}
                        </div>
                    : null}

                    {(resultsNum > 50) ? 
                        <button onClick={previous}>Previous</button>
                    : null}
                    {(resultsNum < totalResults - 50) ? 
                        <button onClick={next}>Next</button>
                    : null}
                </div>
            :
                <div>
                    <button onClick={() => {setParkClick(null); setPark(null)}}>Back</button>
                    {(park) ? 
                        <div>
                            <h1 className="park-title-style">{park.fullName}</h1>
                            <h2 className="designation-style">{park.designation}</h2>
                            <h3 className="park-description-style">{park.description}</h3>
                        </div>
                    : null}
                </div>
            }
            
            
        </div>
    );
}

export default AllParks;