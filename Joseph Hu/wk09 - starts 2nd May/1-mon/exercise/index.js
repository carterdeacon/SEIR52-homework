const express = require('express')
const ejs = require('ejs')
const axios = require ('axios')
const server = express();
server.set('view-engine', ejs);
const PORT = 8888;

// const options = {
//     method: 'GET',
//     url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/',
//     headers: {
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//       'X-RapidAPI-Key': '08cf77b3a2mshb127b693c6588f7p1a915ajsnbc6995449cda'
//     }
//   };
  

server.get('/', (req, res)=>{
    res.render('home.ejs')
})

server.get('/exercise', (req, res)=>{
    axios.request({
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${req.query.bodypart}`,
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': '08cf77b3a2mshb127b693c6588f7p1a915ajsnbc6995449cda'
        }
      }).then(function (response) {
        console.log(response.data);
        res.render('exercise.ejs', {exercises: response.data})
    }).catch(function (error) {
        console.error(error);
    });
})

server.listen(PORT, () => console.log(`Now serving on http: //localhost:${PORT}`));