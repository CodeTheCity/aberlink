import React, { useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Cookies from 'universal-cookie';

import { useParams } from 'react-router-dom';

import './Display.css'

const Visit = () => {

  const {id} = useParams();
  const cookies = new Cookies();

  if (!cookies.get("uuid")){
    cookies.set("uuid", uuidv4());
  }

  let uuid = cookies.get("uuid")

  useEffect(() => {
    
    console.log("sending...")
    console.log(`${global.config.API_URL}/visit/${id}/${uuid}`)
    fetch(`${global.config.API_URL}/visit/${id}/${uuid}`)
    .then(res => res.json())
    .then(json => {
      
    })
  });
  

  return (

    <div className="frame">
        <img src="" alt=""/>
      <p className="visited-text">You have visited location {id}!
      </p>
    </div>
  )
}

export default Visit;