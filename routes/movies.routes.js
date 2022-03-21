const Movie = require('../models/movie.model.js')
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {

    // appel la BD pour avoir les movies
   const movies = await Movie.find()
      console.log(movies, 'REÇUUUUUU');
      res.render('movies', { movies })
    
})

module.exports = router;