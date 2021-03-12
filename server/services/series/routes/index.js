const router = require('express').Router()
const Controller = require('../controllers')

router.get('/series', Controller.findAll)
router.post('/series', Controller.addSeries)
router.get('/series/:id', Controller.findByID)
router.put('/series/:id', Controller.updateSeries)
router.delete('/series/:id', Controller.delete)

module.exports = router