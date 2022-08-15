import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

export function expressApp() {
  const app = express()

  app.use(express.json())
  app.use(helmet())
  app.use(cors())

  app.get('/api', (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Default endpoint, please build additional endpoints',
      data: {
        hello: 'hello, world!'
      }
    })
  })

  app.use((err, req, res, next) => {
    res.status(500).json({
      success: false,
      message: 'Default error middleware, please replace.'
    })
  })

  return app
}

export default expressApp
