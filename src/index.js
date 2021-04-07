const express = require('express');

const WeatherRoute = require('./Routes/WeatherRoute')

const app = express();

app.use(WeatherRoute)

app.get('/', (req, res) => {
    res.send('heyo')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})