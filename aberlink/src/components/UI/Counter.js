import React from 'react';

import './Interface.css';

const Counter = props => {

    const count = 0;

    return (
        <>
        <div className="text">
            <h1>COUNTER: </h1>
            <div className="counter">
                <h1>{count}</h1>
                
            </div>
        </div>
           
        </>
    )
}

export default Counter;