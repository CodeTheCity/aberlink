import React from 'react';

import Interface from '../components/UI/Interface';
import VideoStream from '../components/VideoStream';

import { useParams } from 'react-router-dom';

import './Display.css'

const Display = () => {

  const {id} = useParams();

  return (

    <div className="frame">
      <div class="overlay left"/>
      <div class="overlay right"/>
      <VideoStream embedId={'E9iP8jdtYZ0'} />
      <Interface loc={id} />
    </div>
  )
}

export default Display;