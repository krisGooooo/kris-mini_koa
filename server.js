/*
 * @Author: krisGooooo
 * @Description: 
 * @LastEditors: krisGooooo
 * @Date: 2019-03-01 21:23:01
 * @LastEditTime: 2019-03-01 21:48:29
 */

const koa = require('./application')
const app = new koa()

app.use((req, res) => {
  res.writeHead(200)
  res.end('hello koa')
})

app.listen(9093, ()=>{
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