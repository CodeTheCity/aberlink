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
  let visited = [];
  useEffect(() => {
    
    console.log("sending...")
    console.log(`${global.config.API_URL}/visit/${id}/${uuid}`)
    fetch(`${global.config.API_URL}/visit/${id}/${uuid}`)
    .then(res => res.json())
    .then(json => {
      visited = json.locations
    })
  });

  let visitedAll = visited.length > 1;

  let visitedText = visitedAll ? "Thanks for visiting both locations!" : `You have visited location ${id}.`
  
  return (

    <div className="frame">
      <p className={`visited ${visitedAll && 'both'}`}>{visitedText}</p>
    </div>
  )
}

export default Visit;