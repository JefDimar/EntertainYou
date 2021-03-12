const axios = require('axios');
const Redis = require('ioredis')
const redis = new Redis({ connectTimeout: 60000 })

class SeriesController {
  static async createSeries(req, res, next) {
    try {
      await redis.del('movies/series:data')
      const input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popular: parseFloat(req.body.popular),
        tags: req.body.tags
      }
      const { data } = await axios.post('http://localhost:4002/series', input)

      res.status(201).json(data)
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }

  static async findSeriesId(req, res, next) {
    try {
      const id = req.params.id
      const { data } = await axios.get(`http://localhost:4002/series/${id}`)

      res.status(200).json(data)
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }

  static async updateSeries(req, res, next) {
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
      const { data } = await axios.put(`http://localhost:4002/series/${id}`, input)

      res.status(200).json(data)
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }

  static async deleteSeries(req, res, next) {
    try {
      await redis.del('movies/series:data')
      const id = req.params.id
      const { data } = await axios.delete(`http://localhost:4002/series/${id}`)

      res.status(200).json(data)
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }
}

module.exports = SeriesController;