var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
// var moment = require('moment');
var axios = require('axios');

const io = require('socket.io')();
// const socketPort = 8000;
const port = 8080;

const url = "https://api.darksky.net/forecast";
const DSkey = "178e95f7896a0cf2bdf339837cc01ccf";


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/weather', (req, res) => {
  axios(`${url}/${DSkey}/${req.body.location}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    })
})

// io.on('connection', (client) => {
//     client.on('subscribeToSocket', (interval) => {
//     console.log('client is subscribing to timer with interval ', interval);
//     setInterval(() => {
//       var date = moment().format("dddd, MMMM Do YYYY")
//       client.emit('timer', date);
//     }, interval);
//   });
// });

// io.listen(socketPort);
app.listen(port, () => console.log('listening on port ', port));
