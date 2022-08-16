import {Router} from 'express'

export const apiRouter = Router()

apiRouter.get('/api', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Default api endpoint, please build additional endpoints',
    data: {
      hello: 'hello, world!'
    }
  })
})

apiRouter.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: 'Default error middleware, please replace.'
  })
})

export default apiRouter
