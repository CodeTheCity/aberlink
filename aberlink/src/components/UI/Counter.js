import React from 'react';

import './Interface.css';

const Counter = props => {

    const count = 100;

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