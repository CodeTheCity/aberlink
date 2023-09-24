import React, { useState } from 'react';

import './Interface.css';

import { useInterval } from "../../useInterval";


const Counter = props => {

    const getCount = async () => {
        let count = useState;

        await fetch(`${global.config.API_URL}/counter`)
        .then(res => res.text())
        .then(text => count = text);
        
        return count
    }

    const [count, setCount] = useState(-1);

    useInterval(async () => {
        
        setCount(await getCount());
    }, 1000);

    return (
        <>
        <div className="text">
            <h1>COUNTER: </h1>
            <div className="count">
                <h1>{count}</h1>
            </div>
        </div>
           
        </>
    )
}

export default Counter;