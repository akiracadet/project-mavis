import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

export function expressApp() {
  const app = express()

  app.use(express.json())
  app.use(helmet())
  app.use(cors())

  app.get((req, res, next) => {
    res.json(200).json({
      success: true,
      message: 'Default endpoint, please replace and build additional endpoints',
      data: {
        hello: 'hello, world!'
      }
    })
  })

  app.use((err, req, res, next) => {
    res.json(500).json({
      success: false,
      message: 'Default error middleware, please replace.'
    })
  })

  return app
}

export default expressApp
