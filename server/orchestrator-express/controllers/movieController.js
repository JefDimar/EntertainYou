const axios = require('axios');
const Redis = require('ioredis')
const redis = new Redis({ connectTimeout: 60000 })

class MovieController {
  static async createMovie(req, res, next) {
    try {
      await redis.del('movies/series:data')
      const input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popular: parseFloat(req.body.popular),
        tags: req.body.tags
      }
      const { data } = await axios.post('http://localhost:4001/movies', input)

      res.status(201).json(data)
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }

  static async findMovieId(req, res, next) {
    try {
      const id = req.params.id
      const { data } = await axios.get(`http://localhost:4001/movies/${id}`)

      res.status(200).json(data)
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }

  static async updateMovie(req, res, next) {
    try {
      await redis.del('movies/series:data')
      const id = req.params.id
      const input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popular: parseFloat(req.body.popular),
        tags: req.body.tags
      }
      const { data } = await axios.put(`http://localhost:4001/movies/${id}`, input)

      res.status(200).json(data)
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }

  static async deleteMovie(req, res, next) {
    try {
      await redis.del('movies/series:data')
      const id = req.params.id
      const { data } = await axios.delete(`http://localhost:4001/movies/${id}`)

      res.status(200).json(data)
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }
}

module.exports = MovieController