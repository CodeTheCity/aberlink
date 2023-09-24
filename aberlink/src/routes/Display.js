import React from 'react';

import Interface from '../components/UI/Interface';
import VideoStream from '../components/VideoStream';

import { useParams } from 'react-router-dom';

import './Display.css'

const Display = () => {

  const {id} = useParams();
  let altID = 0;
  if (id == 1){
    altID = 2;
  } else {
    altID = 1;
  }

  return (

    <div className="frame">
      <VideoStream channelID={`aberlink${altID}`} />
      <Interface loc={id} />
    </div>
  )
}

export default Display;