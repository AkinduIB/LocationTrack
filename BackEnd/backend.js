const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let userLocations = {};

app.post('/updateLocation', (req, res) => {
    const { userId, latitude, longitude } = req.body;
    userLocations[userId] = { latitude, longitude, timestamp: new Date() };
    res.send({ message: 'Location updated' });
});

app.get('/getLocation/:userId', (req, res) => {
    const { userId } = req.params;
    res.send(userLocations[userId] || { message: 'No location found for user' });
});

module.exports = app;
