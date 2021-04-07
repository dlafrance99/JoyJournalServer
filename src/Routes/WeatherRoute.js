const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/Weather', async (req, res) => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?lat=39.5903725389482&lon=-105.01288287886238&appid=0b92ec2f4844e7a3ad6743dc52805671').then(function (response) {

        response = response.data

        console.log(response)
    })
})

module.exports = router;