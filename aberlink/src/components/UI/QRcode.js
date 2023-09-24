import React from 'react';

const QRcode = props => {

    const qrcode = '/placeholderimg.png';
    return (
        <div>
            <img src={qrcode} alt="QRCode"/>
        </div>
    )
}

export default QRcode;