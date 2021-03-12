const router = require('express').Router()
const Controller = require('../controllers')

router.get('/movies', Controller.findAll)
router.post('/movies', Controller.addMovies)
router.get('/movies/:id', Controller.findByID)
router.put('/movies/:id', Controller.updateMovie)
router.delete('/movies/:id', Controller.delete)

module.exports = router