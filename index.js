console.log('index.js is running')


const express = require('express');

const server = express();

server.use(express.json());


server.get("/", (req,res) => {

    const songs = [{id: 1, name: "Final Countdown"}]

    res.status(200).jsong(songs)

})

const port = 5000;

server.listen(port, () => console.log(`Your server is running on ${port}`))