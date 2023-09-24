import React from 'react';

import Interface from '../components/UI/Interface';
import VideoStream from '../components/VideoStream';

import { useParams } from 'react-router-dom';

import './Display.css'

const Visit = () => {

  const {id} = useParams();

  return (

    <div className="frame">
        <img src="" alt=""/>
      <p className="visited-text">You have visited location {id}!
      </p>
    </div>
  )
}

export default Visit;