const { gql, ApolloError } = require('apollo-server')
const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis({ connectTimeout: 60000 })

module.exports = {
  typeDefs: gql`
  input MovieInput {
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    tags: [String]
  }
  extend type Query {
    findMovie(id: ID): movie
  }
  type Mutation {
    createMovie(input: MovieInput): movie
    updateMovie(input: MovieInput, id: ID): movie
    deleteMovie(id: ID): String
  }
  `,
  resolvers: {
    Query: {
      async findMovie(parent, args, context, info) {
        try {
          const { data } = await axios.get(`http://localhost:4001/movies/${args.id}`)

          return data
        } catch ({ message }) {
          return new ApolloError(message)
        }
      },
    },
    Mutation: {
      async createMovie(parent, args, context, info) {
        try {
          await redis.del('movies/series:data')

          const { data } = await axios.post('http://localhost:4001/movies', args.input)

          return data.ops[0]
        } catch ({ message }) {
          return new ApolloError(message)
        }
      },
      async updateMovie(parent, args, context, info) {
        try {
          await redis.del('movies/series:data')

          const { data } = await axios.put(`http://localhost:4001/movies/${args.id}`, args.input)

          return data.ops[0]
        } catch ({ message }) {
          return new ApolloError(message)
        }
      },
      async deleteMovie(parent, args, context, info) {
        try {
          await redis.del('movies/series:data')

          const { data } = await axios.delete(`http://localhost:4001/movies/${args.id}`)
          const output = 'Movies deleted successfully'
          return output
        } catch ({message}) {
          return new ApolloError(message)
        }
      }
    }
  }
}