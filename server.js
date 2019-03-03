/*
 * @Author: krisGooooo
 * @Description: 演示语法
 * @LastEditors: krisGooooo
 * @Date: 2019-03-01 21:23:01
 * @LastEditTime: 2019-03-03 11:08:23
 */

const koa = require('./application')
const app = new koa()

//  延迟函数 为了演示效果
function delay(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( )
    }, 2000);
  })
}
//  模仿 koa 语法 测试洋葱圈模型 最终log 13542
app.use(async(ctx, next) => {
  ctx.body = '1'
  await next()
  ctx.body += '2'
})

app.use(async(ctx, next) => {
  ctx.body += '3'
  await delay()
  await next()
  ctx.body += '4'
})
app.use(async(ctx, next) => {
  ctx.body += '5'
})

app.listen(9095, ()=>{
  console.log('server start on 9095');
})
















// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.writeHead(200)
//   res.end('hello koa')
// })

// server.listen(9092, () => {
//   console.log('server start');
// })