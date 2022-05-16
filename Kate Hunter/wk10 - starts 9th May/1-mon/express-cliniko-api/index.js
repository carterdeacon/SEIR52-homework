const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

// Basic setup
const server = express();
server.set('view-engine', ejs);
const PORT = 1337;



server.get('/cliniko-data', (req, res) => {
    axios.get('https://api.au1.cliniko.com/v1').then((response) => {
        res.send(response.data); 
    });
});


server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));

// API key
// MS04ODgyMjIzMTM0MzcyMDI0MjQtR3ZES2ZWYmROS3BsclRiZ01ZQ3JHY3JmdXZyOGlTeDA-au1