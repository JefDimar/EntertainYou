const router = require('express').Router()
const MovieController = require('../controllers/movieControllers.js')
const TVSeriesController = require('../controllers/tvSeriesControllers.js')

router.get('/', () => {
  res.send('Welcome back jefri, server is online')
})

router.get('/movies', MovieController.findAll)
router.post('/movies', MovieController.addMovie)
router.get('/movies/:id', MovieController.findByID)
router.put('/movies/:id', MovieController.updateMovie)
router.delete('/movies/:id', MovieController.deleteMovie)

router.get('/tvseries', TVSeriesController.findAll)
router.post('/tvseries', TVSeriesController.addTVSeries)
router.get('/tvseries/:id', TVSeriesController.findByID)
router.put('/tvseries/:id', TVSeriesController.updateTVSeries)
router.delete('/tvseries/:id', TVSeriesController.deleteMovie)

module.exports = router