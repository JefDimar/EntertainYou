const axios = require('axios');
const Redis = require('ioredis')
const redis = new Redis({ connectTimeout: 60000 })

class Controller {
  static async findAll(req, res, next) {
    try {
      const data = await redis.get('movies/series:data')
      if (data) {
        res.status(200).json(JSON.parse(data))
      } else {
        const [movies, series] = await Promise.all([
          axios.get('http://localhost:4001/movies'),
          axios.get('http://localhost:4002/series')
        ])
        const output = {
          movies: movies.data,
          series: series.data
        }
        redis.set('movies/series:data', JSON.stringify(output))
        res.status(200).json(output)
      }
    } catch ({ message }) {
      res.status(500).json(message)
    }
  }
}

module.exports = Controller