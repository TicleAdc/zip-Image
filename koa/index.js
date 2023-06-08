const Koa = require('koa')
const app = new Koa()

app.use( async (ctx, next) => {
    ctx.response.body = "大噶好，我系渣渣辉"
})

app.listen(3636, ()=>{
    console.log('server is running at localhost:3636');
})