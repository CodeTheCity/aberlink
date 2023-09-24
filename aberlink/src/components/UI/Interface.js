import React from 'react';

import Counter from './Counter';
import Instructions from './Instructions';
import QRcode from './QRcode';

import './Interface.css';

const Interface = props => {
    
    return (
        <div className="interface">
            <Counter />
            <Instructions />
            <QRcode loc={props.loc} />
        </div>
    )
}

export default Interface;