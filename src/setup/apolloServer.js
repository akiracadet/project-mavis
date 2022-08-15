import {ApolloServer} from 'apollo-server-express'
import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core'
import http from 'http'
import {typeDefs, resolvers} from '../graphql/index.js'

const {PORT} = process.env

export async function apolloServer(app) {
  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    introspection: true,
    playground: true,
  })

  await server.start()

  // TAKE NOTE!
  // don't ever change the name of 'app' into something else
  // for example change name of 'app' to 'expressApp'
  // apollo-server generates an annoying error which is hard to debug
  server.applyMiddleware({app})

  await new Promise(resolve => httpServer.listen({port: PORT}, resolve))

  console.log(`🚀 express server ready at http://localhost:${PORT}/`)
  console.log(`🚀 graphql server ready at http://localhost:${PORT}${server.graphqlPath}`)
}

export default apolloServer
