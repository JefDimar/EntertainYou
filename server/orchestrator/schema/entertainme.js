const { gql } = require('apollo-server')
const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis({ connectTimeout: 60000 })

module.exports = {
  typeDefs: gql`
  type movie {
    id: ID,
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float
  }
  type serie {
    id: ID,
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float
  }
  type response {
    movies: [movie],
    series: [serie]
  }

  type Query {
    response: response
  }
  `,
  resolvers: {
    Query: {
      async response() {
        try {
          const data = await redis.get('movies/series:data')

          if (data) {
            const output = JSON.parse(data)
            return output
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
            return output
          }
        } catch ({ message }) {
          return message
        }
      }
    }
  }
}