const router = require('express').Router()
const Controller = require('../controllers')
const MovieController = require('../controllers/movieController')
const SeriesController = require('../controllers/seriesController')

router.get('/entertainme', Controller.findAll)

router.post('/movies', MovieController.createMovie)
router.get('/movies/:id', MovieController.findMovieId)
router.put('/movies/:id', MovieController.updateMovie)
router.delete('/movies/:id', MovieController.deleteMovie)

router.post('/series', SeriesController.createSeries)
router.get('/series/:id' , SeriesController.findSeriesId)
router.put('/series/:id', SeriesController.updateSeries)
router.delete('/series/:id' , SeriesController.deleteSeries)

module.exports = router