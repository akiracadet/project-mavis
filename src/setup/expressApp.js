import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import {apiRouter} from '../api/index.js'

export function expressApp() {
  const app = express()

  app.use(express.json())
  app.use(helmet())
  app.use(cors())

  app.use(apiRouter)

  return app
}

export default expressApp
