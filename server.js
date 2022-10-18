const Koa = require('koa')
const koaBody = require('koa-body')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRouter = require('./Routers/UserRouter')
const databaseFn = require('./config/database')


;(async () => {

  dotenv.config()
  const database = databaseFn()
  console.log({ database })

  await mongoose.connect(`mongodb://${database.host}:${database.port}/${database.name}`)

  const app = new Koa()

  app.use(koaBody())

  //app.use('/api/users', userRouter)
  app.use(userRouter.routes())

  const PORT = process.env.PORT || 8080

  app.listen(PORT, () => console.log(`Aplicación corriendo en el puerto ${PORT}`))
})()
