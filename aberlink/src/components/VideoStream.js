import React, { useState, useCallback } from 'react';
import './VideoStream.css'

const VideoStream = ({embedId}) => {
    return (
        <div className="video-background">
        <iframe
            src="https://www.youtube.com/embed/E9iP8jdtYZ0?si=2L-zOGJpApC9dCv5&autoplay=1&mute=1"
            allow="autoplay"
       />
        </div>
    )
}

export default VideoStream;