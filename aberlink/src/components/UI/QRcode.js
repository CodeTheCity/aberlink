import React from 'react';

const QRcode = props => {
    const qrcode = `${global.config.API_URL}/qr/${props.loc}`;
    return (
        <div>
            <img src={qrcode} alt="QRCode"/>
        </div>
    )
}

export default QRcode;