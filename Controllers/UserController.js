const { createIndexes } = require("../Models/UserModel")


class UserController {
  constructor (service) {
    this.service = service
 
  }

  async getAll (ctx) {
    try {
      const items = await this.service.getAll()
    
      //return res.json(items)
      return ctx.body = items
    } catch (e) {
      console.log(e)
      ctx.response.status = 500
      ctx.body = {
        error: e.message
      } 
      return
      }
    
  }

  async create (ctx) {
    const data = ctx.request.body

    try {
      const userCreated = await this.service.create(data)
      ctx.response.status = 201
      ctx.body = userCreated
      
    } catch (e) {
      console.log(e)
      ctx.response.status = 500
      ctx.body = {
        error: e.message
      } 
      return
      }
    }
  }


module.exports = UserController
