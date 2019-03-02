/*
 * @Author: krisGooooo
 * @Description: mini-koa 核心
 * @LastEditors: krisGooooo
 * @Date: 2019-03-01 21:28:55
 * @LastEditTime: 2019-03-02 16:10:25
 */
const http = require('http')

//  实现 req res context 的 get/set 方法
let request = {
  get url(){
    return this.req.url
  }
}
let response = {
  get body(){
    return this._body
  },
  set body(val){
    this._body = val
  }
}
let context = {
  get url(){
    return this.request.url
  },
  get body(){
    return this.response.body
  },
  set body(val){
    this.response.body = val
  }
}

class Application{
  //  挂载 get/set 的context res req
  constructor(){
    this.context = context
    this.response = response
    this.request = request
  }
  //  中间件机制
  use(callback){
    this.callback = callback
  }
  //  监听端口
  listen(...args){
    const server = http.createServer(async (req, res) => {
      let ctx = this.createCtx(req, res)
      await this.callback(ctx)
      ctx.res.end(ctx.body)
    })
    server.listen(...args)
  }
  //  创建context 并将原生req res 挂在上
  createCtx(req, res){
    let ctx = Object.create(this.context)
    ctx.request = Object.create(this.request)
    ctx.response = Object.create(this.response)
    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res
    return ctx
  }
  //  compose 实现中间件的洋葱圈模型
  compose(midds){
    let len = midds.length
    return (...args) => {
      let res = midds[0](...args)
      for (let i = 1; i < len; i++) {
        res = midds[i](res)
      }
      return res
    }    
  }
}

module.exports = Application