__path = process.cwd()

// Module
const express = require('express');
const route = express.Router();
const fetch = require('node-fetch');

route.get('/', (req, res) => {
    res.sendFile(__path + '/pages/index.html')
})

module.exports = route