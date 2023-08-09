# KOA
- Web Application Framework
- Faster than express
- Designed by Express team
- Efficient to handle more request than Express

## Simple Koa Server
```
const Koa = require('koa);
const app = new Koa()
const PORT = 4000
app.listen(PORT)
console.log(`Server is running on ${PORT}`)
```

## Routing

```
npm i -save koa-router
```
### Routing for GET Method

```
const Koa = require('koa);
const app = new Koa()
const PORT = 4000
const Router = require('koa-router')
const router = new Router()

router.get('/',ctx =>{
    ctx.body = "Welcome to Koa App"
})

app.listen(PORT)
console.log(`Server is running on ${PORT}`)
```