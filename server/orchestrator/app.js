const { ApolloServer } = require('apollo-server')
const EntertainmeSchema = require('./schema/entertainme')

const server = new ApolloServer({ typeDefs: EntertainmeSchema.typeDefs, resolvers: EntertainmeSchema.resolvers })

server.listen().then(({ url }) => {
  console.log('Apollo Server listening on ' + url)
})