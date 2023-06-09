const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
const Router = require('koa-router')

app.use(async (ctx, next) => {
    let startTime = new Date().getTime()
    await next()
    let endTime = new Date().getTime()
    console.log(`此次响应时间为：${endTime - startTime}ms`);
})

/**
 * 单路由
 */

// const router = new Router()

// router.get('/', async (ctx, next) => {
//     ctx.body = `<h1>It's homePage</h1>`
// })

// router.get('/user', async (ctx, next) => {
//     ctx.body = `<h1>it's user page</h1>`
// })

// router.get('/error', async(ctx, next) => {
//     ctx.body = `<h1>404 not found</h1>`
// })

// app.use(router.routes())


/**
 * 嵌套路由
 */
// let childRouter1 = new Router()

// childRouter1.get('/', async (ctx, next) => {
//     ctx.body = `<h1>这是子路由1页面</h1>`
// })

// let childRouter2 = new Router()

// childRouter2.get('/', async(ctx, next) => {
//     ctx.body = `<h1>这是子路由2</h1>`
// }).get('/home', async (ctx, next) => {
//     ctx.body = `<h1>这是子路由2的home页面</h1>`
// })

// let rootRouter = new Router()

// rootRouter.use('/one', childRouter1.routes(), childRouter1.allowedMethods())
// rootRouter.use('/two', childRouter2.routes(), childRouter2.allowedMethods())

// app.use(rootRouter.routes()).use(rootRouter.allowedMethods())

app.use(ctx => {
    ctx.type = 'html'
    ctx.body = fs.readFileSync('open.html')
})

app.listen(3636, () => {
    console.log('server is running at localhost:3636');
})