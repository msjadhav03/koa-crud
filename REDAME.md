# KOA
- Web Application Framework
- Faster than express
- Designed by Express team
- Efficient to handle more request than Express

## Installing Koa
```
npm i --save koa
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
app.use(router.routes())
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
app.use(router.routes())
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
app.use(router.routes())
app.listen(PORT)
console.log(`Server is running on ${PORT}`)
```

### Routing for PATCH
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

//Update BY ID route
router.patch('/pets/:id',async (context) =>{
    console.log('',context.url, context.request.body)
    const index = data.findIndex(element => element.id === context.params.id)
    if(context.request.body?.name || context.request.body?.breed)
    {
        data[index].name = context.request.body?.name || data[index].name
        data[index].breed = context.request.body?.breed || data[index].breed
    }
    context.body = data
})
app.use(router.routes())
app.listen(PORT)
console.log(`Server is running on ${PORT}`)

```

### Routing for POST
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

router.post('/pets',async (context)=>{
    if(context.request.body == null)
    {
        context.throw(400,'Bad Request')
    }
    data.push(context.request.body)
    context.body = data
})

app.use(router.routes())
app.listen(PORT)
console.log(`Server is running on ${PORT}`)
```