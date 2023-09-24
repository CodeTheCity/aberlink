import React from 'react';

import Interface from '../components/UI/Interface';
import VideoStream from '../components/VideoStream';

import { useParams } from 'react-router-dom';

const Display = () => {

  const {id} = useParams();

  return (
    <div className="display">
    <VideoStream embedId={'E9iP8jdtYZ0'} />
    <Interface />
    
    </div>
  )
}

export default Display;