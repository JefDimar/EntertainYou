const { gql } = require('apollo-server')
const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis({ connectTimeout: 60000 })

module.exports = {
  typeDefs: gql`
  type serie {
    id: ID,
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    tags: [String]
  }
  input {
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    tags: [String]
  }
  type Query {
    findById({id: id}): serie
  }
  type Mutation {
    createSerie(input): serie,
    updateSerie(input, {id:id}): serie,
    deleteSerie({id: id}): String
  }
  `,
  resolvers: {
    Query: {},
    Mutations: {
      async createSerie(parent, args, context, info) {
        try {
          await redis.del('movies/series:data')
          const { data } = await axios.post('http://localhost:4002/series', args.input)

          return data
        } catch ({ message }) {
          return message
        }
      },
      async findById(parent, args, context, info) {
        try {
          await redis.del('movies/series:data')
          const { data } = await axios.get(`http://localhost:4002/series/${args.id}`)

          return data
        } catch ({ message }) {
          return message
        }
      },
      async updateSerie(parent, args, context, info) {
        try {
          await redis.del('movies/series:data')

          const { data } = await axios.put(`http://localhost:4002/series/${id}`, args.input)

          return data
        } catch ({ message }) {
          return message
        }
      },
      async deleteSerie(parent, args, context, info) {
        try {
          await redis.del('movies/series:data')

          const { data } = await axios.delete(`http://localhost:4001/series/${id}`)
          const output = 'Series deleted successfully'
          return output
        } catch ({message}) {
          return message
        }
      }
    }
  }
}