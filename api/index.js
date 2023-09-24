const express = require("express");
require('dotenv').config();

const URL = process.env.URL || "api.aberlink.jbritain.net";
const SITE_URL = process.env.SITE_URL || "aberlink.jbritain.net";

let visitors = new Object;
let counter = 0;


var app = express();

app.get("/visit/:loc", (req, res) => {
  const loc = req.params.loc;
  
  let ip = req.socket.remoteAddress;
  ip = ip.replace("::ffff:", "");

  if(!visitors[ip]){
    visitors[ip] = new Object;
    visitors[ip].visitedLocations = [];
  }
  
  if (!visitors[ip].visitedLocations.includes(loc)){
    visitors[ip].visitedLocations.push(loc);
  }

  res.status(200).send(visitors[ip].visitedLocations);
})

app.get("/counter", (req, res) => {
  res.status(200).send(counter.toString());
})

app.post("/increment", (req, res) => {
  counter += 1;
  res.status(200).send(counter.toString());
})

app.post("/reset", (req, res) => {
  counter = 0;
  res.status(200).send(counter.toString());
})

app.get("/qr/:loc", (req, res) => {
  res.redirect(`https://api.qrserver.com/v1/create-qr-code?data=https://${SITE_URL}/visit/${req.params.loc}`);
})

app.listen(8080, () => {
  console.log(`Using URL ${URL}`)
  console.log(`Listening at http://localhost:${8080}`);
})