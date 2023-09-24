const express = require("express");
require('dotenv').config();
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const cookieParser = require('cookie-parser')

const URL = process.env.URL || "api.aberlink.jbritain.net";
const SITE_URL = process.env.SITE_URL || "aberlink.jbritain.net";

let visitors = new Object;
let completedUsers = [];

const locations = {
  1: {
    locname: "location 1",
    linkedTo: 2,
  },
  2: {
    locname: "location 2",
    linkedTo: 1
  }
}

var app = express();
app.use(cors());
app.use(cookieParser());

app.get("/visit/:loc", (req, res) => {
  const loc = req.params.loc;
  
  let id = req.cookies.id;
  if (!id){
    id = uuidv4();
    res.cookie('id', id);
  }

  if(!visitors[id]){
    visitors[id] = new Object;
    visitors[id].visitedLocations = [];
  }
  
  if (!visitors[id].visitedLocations.includes(loc)){
    visitors[id].visitedLocations.push(loc);
  }

  linkedloc = locations[loc].linkedTo;
  if (visitors[id].visitedLocations.includes(linkedloc.toString())){
    if (!completedUsers.includes(id)){
      completedUsers.push(id);
    }
  }

  res.status(200).send(visitors[id].visitedLocations);
})

app.get("/counter", (req, res) => {
  res.status(200).send(completedUsers.length.toString());
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