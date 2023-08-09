# KOA
- Web Application Framework
- Faster than express
- Designed by Express team
- Efficient to handle more request than Express

## Installing Koa
```
npm i --save --global koa
```
## Initalizing Koa Package
```
npm init -y
```

## Simple Koa Server
```
const Koa = require('koa);
const app = new Koa()
const PORT = 4000
app.listen(PORT)
console.log(`Server is running on ${PORT}`)
```

## Routing

### Installing router package
```
npm i --save koa-router
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


### Routing for GET BY id Method

```
const Koa = require('koa);
const app = new Koa()
const PORT = 4000
const Router = require('koa-router')
const router = new Router()
const data = [
    {
        "id" : "1",
        "breed" : "Siberian Husky"
    }
]
router.get('/:id',ctx =>{
    ctx.body = data.find( element => element.id === ctx.request.params)
})

app.listen(PORT)
console.log(`Server is running on ${PORT}`)
```


### Routing for DELETE BY id Method

```
const Koa = require('koa);
const app = new Koa()
const PORT = 4000
const Router = require('koa-router')
const router = new Router()
const data = [
    {
        "id" : "1",
        "breed" : "Siberian Husky"
    }
]
router.delete('/:id',ctx =>{
    const element = data.find( element => element.id === ctx.request.params)
    data.remove(element)
    ctx.status = 200
    ctx.body = element
})

app.listen(PORT)
console.log(`Server is running on ${PORT}`)
```