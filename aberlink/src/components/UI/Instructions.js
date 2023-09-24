import React from 'react';

import './Interface.css';
const Instructions = props => {

    

    return (
        <div className="text">
            <p>This Counter shows how many people have scanned the qr codes on both sides of this portal.</p>
            <p>After you scan the qr code down below, head over to location {props.loc === 1 ? 2 : 1} to scan the second qr code if you have not done so already! </p>
        </div>
    )
}

export default Instructions;