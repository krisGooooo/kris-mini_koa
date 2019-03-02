/*
 * @Author: krisGooooo
 * @Description: 演示语法
 * @LastEditors: krisGooooo
 * @Date: 2019-03-01 21:23:01
 * @LastEditTime: 2019-03-02 13:11:29
 */

const koa = require('./application')
const app = new koa()

//  模仿 koa 语法
app.use(async(ctx) => {
  ctx.body = 'hello woa' + ctx.url
})

app.listen(9094, ()=>{
  console.log('server start on 9092');
})
















// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.writeHead(200)
//   res.end('hello koa')
// })

// server.listen(9092, () => {
//   console.log('server start');
// })