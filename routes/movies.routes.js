const Movie = require('../models/movie.model.js')
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {

    // appel la BD pour avoir les movies
   const movies = await Movie.find()
      console.log(movies, 'REÇUUUUUU');
      res.render('movies', { movies })
})

router.get('/id_:id', async (req,res, next) => {
    const movieId = req.params.id;
    await console.log(movieId, " MOVIE ID !") 

    try {
        const movie = await Movie.findById(movieId)
        res.render('movie-details', { movie })
        console.log(movie, ' LE FIIILLLLM')
      } catch (error) {
        next(error)
      }
})

module.exports = router;