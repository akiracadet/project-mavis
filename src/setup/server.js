import initializeEnvironment from './initializeEnvironment.js'
import expressApp from './expressApp.js'
import apolloServer from './apolloServer.js'

export async function server() {
  initializeEnvironment()
  const app = expressApp()
  await apolloServer(app)
}

export default server
