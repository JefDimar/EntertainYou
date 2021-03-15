const { gql } = require('apollo-server')
const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis({ connectTimeout: 60000 })

module.exports = {
  typeDefs: gql`
  input SerieInput{
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    tags: [String]
  }
  extend type Query {
    findSerie(id: ID): serie
  }
  extend type Mutation {
    createSerie(input: SerieInput): serie,
    updateSerie(input: SerieInput, id:ID): serie,
    deleteSerie(id: ID): String
  }
  `,
  resolvers: {
    Query: {
      async findSerie(parent, args, context, info) {
        try {
          const { data } = await axios.get(`http://localhost:4002/series/${args.id}`)

          return data.ops[0]
        } catch ({ message }) {
          return new ApolloError(message)
        }
      },
    },
    Mutation: {
      async createSerie(parent, args, context, info) {
        try {
          await redis.del('movies/series:data')
          const { data } = await axios.post('http://localhost:4002/series', args.input)

          return data
        } catch ({ message }) {
          return new ApolloError(message)
        }
      },
      async updateSerie(parent, args, context, info) {
        try {
          await redis.del('movies/series:data')

          const { data } = await axios.put(`http://localhost:4002/series/${args.id}`, args.input)

          return data
        } catch ({ message }) {
          return new ApolloError(message)
        }
      },
      async deleteSerie(parent, args, context, info) {
        try {
          await redis.del('movies/series:data')

          const { data } = await axios.delete(`http://localhost:4001/series/${args.id}`)
          const output = 'Series deleted successfully'
          return output
        } catch ({ message }) {
          return new ApolloError(message)
        }
      }
    }
  }
}