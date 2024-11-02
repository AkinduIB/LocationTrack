// backend.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let userLocations = {}; // Store for user locations

// Endpoint to update location
app.post('/updateLocation', (req, res) => {
    const { userId, latitude, longitude } = req.body;
    userLocations[userId] = { latitude, longitude, timestamp: new Date() };
    res.send({ message: 'Location updated' });
});

// Endpoint to retrieve a user's location
app.get('/getLocation/:userId', (req, res) => {
    const { userId } = req.params;
    res.send(userLocations[userId] || { message: 'No location found for user' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
