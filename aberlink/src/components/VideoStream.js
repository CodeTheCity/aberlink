import React, { useState, useCallback } from 'react';
import './VideoStream.css'
import { TwitchPlayerNonInteractive } from 'react-twitch-embed';

const VideoStream = ({channelID}) => {
    return (
        <TwitchPlayerNonInteractive className='video' channel={channelID} autoplay muted />
    )
}

export default VideoStream;