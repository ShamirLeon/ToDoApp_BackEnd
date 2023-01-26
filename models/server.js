import express from 'express'
import cors from 'cors'
import dbConnection from '../database/config.js'
import toDoRouter from '../routes/toDo.js'

class Server {
  constructor () {
    this.port = process.env.PORT
    this.app = express()
    this.connectionDb()
    this.middlewares()
    this.routes()
  }

  routes () {
    this.app.use('/api/toDo', toDoRouter)
  }

  async connectionDb () {
    await dbConnection()
  }

  middlewares () {
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(express.static('static'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`)
    })
  }
}

export default Server
