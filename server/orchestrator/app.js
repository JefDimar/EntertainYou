const { ApolloServer } = require('apollo-server')
const EntertainmeSchema = require('./schema/entertainme')
const MovieSchema = require('./schema/movies')
const SerieSchema = require('./schema/series')

const server = new ApolloServer({
  typeDefs: [
    EntertainmeSchema.typeDefs, MovieSchema.typeDefs, SerieSchema.typeDefs
  ], resolvers: [
    EntertainmeSchema.resolvers, MovieSchema.resolvers, SerieSchema.resolvers
  ]
})

server.listen().then(({ url }) => {
  console.log('Apollo Server listening on ' + url)
})