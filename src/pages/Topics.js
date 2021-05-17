import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import dotenv from 'dotenv';

const Topics = (props) => {

    const [topics, setTopics] = useState([]);
    const [total, setTotal] = useState(0);
    const [current, setCurrent] = useState(0);
    const [topicId, setTopicId] = useState(null);
    const [topicParks, setTopicParks] = useState(null);

    const key = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        props.grabRoute(props.match.path);

        axios.get(`https://developer.nps.gov/api/v1/topics/parks?start=${current}&api_key=${key}`)
            .then(res => {
                setTotal(res.data.total);
                setTopics(res.data.data);
            })
    }, [current])

    useEffect(() => {
        if (topicId) {
            axios.get(`https://developer.nps.gov/api/v1/topics/parks?id=${topicId}&api_key=${key}`)
            .then(res => {
                console.log(res.data.data[0]);
                setTopicParks(res.data.data[0]);
            });
        }
    }, [topicId]);

    const next = () => {
        setCurrent(current + 50);
        window.scrollTo(0, 0)
    }

    const previous = () => {
        setCurrent(current - 50);
        window.scrollTo(0, 0)
    }

    console.log(topics);

    return (
        <div>
            
            {(!topicParks) ? 
                <div>
                    <h1>Topics</h1>
                    <div className="parks-grid">
                        {(topics) ? 
                            topics.map(topic => {
                                return <div>
                                        <h1 className="topic-card-style" onClick={() => setTopicId(topic.id)}>{topic.name}</h1>
                                    </div>
                            })
                        : null}
                    </div>
                    {(current >= 50) ? 
                        <button onClick={previous}>Previous</button>
                    : null}
                    {(current < total - 50) ? 
                        <button onClick={next}>Next</button>
                    : null}
                </div>
            :
                <div>
                    <button onClick={() => {setTopicParks(null); setTopicId(null)}}>Back</button>
                    <h1>{topicParks.name}</h1>
                </div>
            }



        </div>
    );
}

export default Topics;