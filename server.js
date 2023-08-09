const Koa = require('koa');
const app = new Koa()
const PORT = 3000


app.use(async (ctx,next)=>{
    console.log(`Request Method : ${ctx.method} \n Request URL: ${ctx.url}`)
   return next()
})

app.use(async ctx =>{
    ctx.body = "Koa APP"
})
app.listen(PORT)
console.log('Server is running on port',PORT)