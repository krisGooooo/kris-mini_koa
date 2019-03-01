/*
 * @Author: krisGooooo
 * @Description: 
 * @LastEditors: krisGooooo
 * @Date: 2019-03-01 21:28:55
 * @LastEditTime: 2019-03-01 21:49:23
 */
const http = require('http')

class Application{
  constructor(){
    this.callback = () => {}
  }
  use(callback){
    this.callback = callback
  }
  listen(...args){
    const server = http.createServer((req, res) => {
      this.callback(req, res)
    })
    server.listen(...args)
  }
}

module.exports = Application