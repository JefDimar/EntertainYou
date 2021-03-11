const MovieModel = require('../models/movies')

class MovieController {
  static async findAll(req, res, next) {
    try {
      const movies = await MovieModel.find();
      res.status(200).json(movies)
    } catch (error) {
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

      const movies = await MovieModel.create(input)
      // console.log(movies)
      res.status(201).json('Movies added successfully')
    } catch (error) {
      res.status(500).json({ message })
    }
  }

  static async findByID(req, res, next) {
    try {
      const id = req.params.id

      const movies = await MovieModel.findPK(id)
      res.status(200).json(movies)
    } catch (error) {
      res.status(500).json({ message })
    }
  }

  static async updateMovie(req, res, next) {
    try {
      const id = req.params.id
      const input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popular: parseFloat(req.body.popular),
        tags: req.body.tags
      }
      const movies = await MovieModel.update(id, input)
      // console.log(movies)
      res.status(200).json('Movies updated successfully')
    } catch (error) {
      res.status(500).json({ message })
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.id

      const movies = await MovieModel.delete(id)
      // console.log(movies)
      res.status(200).json('Movies deleted successfully')
    } catch (error) {
      res.status(500).json({ message })
    }
  }
}

module.exports = MovieController