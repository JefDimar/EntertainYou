const Series = require('../models')

class Controller {
  static async findAll(req, res, next) {
    try {
      const series = await Series.find().limit(20)
      res.status(200).json(series)
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }

  static async addSeries(req, res, next) {
    try {
      const input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popular: parseFloat(req.body.popular),
        tags: req.body.tags
      }
      const series = await Series.create(input)
      res.status(200).json('Series created successfully')
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }

  static async findByID(req, res, next) {
    try {
      const id = req.params.id
      const series = await Series.findPK(id)
      res.status(200).json(series)
    } catch ({message}) {
      res.status(500).json(message)
    }
  }

  static async updateSeries(req, res, next) {
    try {
      const id = req.params.id
      const input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popular: parseFloat(req.body.popular),
        tags: req.body.tags
      }
      const series = await Series.update(id, input)
      res.status(200).json('Series updated successfully')
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.id
      const series = await Series.delete(id)
      res.status(200).json('Series deleted successfully')
    } catch ({message}) {
      res.status(500).json(message)
    }
  }
}

module.exports = Controller;