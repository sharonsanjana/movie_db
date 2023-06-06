const express =  require('express')
const router = express.Router()
const {Searchmovies, Uploadmovie, Updatemovie, Deletemovie , getMovies, getMoviebyId} = require('../controllers/movie')
router.route('/').get(Searchmovies).post(Uploadmovie)

router.route('/:id').patch(getMovies,Updatemovie).delete(getMovies,Deletemovie).get(getMovies,getMoviebyId)

module.exports = router