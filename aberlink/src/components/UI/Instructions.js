import React from 'react';

import './Interface.css';
const Instructions = props => {

    return (
        <div className="text">
            <p>This Counter shows how many people have been to both sides of this portal.</p>
            <p>After you scan the qr code down below, head over to location{props.loc} to scan the second qr code and increase the counter! </p>
        </div>
    )
}

export default Instructions;