const Movie = require('../models')

class Controller {
  static async findAll(req, res, next) {
    try {
      const movies = await Movie.find().limit(20)
      res.status(200).json(movies)
    } catch ({ message }) {
      res.status(500).json({ message })
    }
  }

  static async addMovies(req, res, next) {
    try {
      const input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popular: parseFloat(req.body.popular),
        tags: req.body.tags
      }

      const movies = await Movie.create(input)
      res.status(201).json('Movies added successfully')
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }

  static async findByID(req, res, next) {
    try {
      const id = req.params.id

      const movies = await Movie.findPK(id)
      res.status(200).json(movies)
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }

  static async updateMovie(req, res, next) {
    try {
      const id = req.params.id
      const input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        tags: req.body.tags
      }
      const movies = await Movie.update(id, input)
      res.status(200).json('Movies updated successfully')
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.id

      const movies = await Movie.delete(id)
      res.status(200).json('Movies deleted successfully')
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }
}

module.exports = Controller