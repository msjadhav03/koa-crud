const Koa = require('koa');
const app = new Koa()
const PORT = 4000
const Router = require('koa-router')
const bodyparser = require('koa-parser')

// Creating instance of Router
const router = Router()

// Using Body parser 
app.use(bodyparser())

// Custom Middleware
app.use(async (ctx,next)=>{
    console.log(`Request Method : ${ctx.method} \n Request URL: ${ctx.url}`)
   return next()
})

// Dummy Data
const data = [
    {
        "id":"1",
        "breed": "Siberian Husky",
        "name":"Groot"
    },
    {
        "id":"2",
        "breed":"Pom",
        "name": "loaf"
    },
    {
        "id":"3",
        "breed": "Golden Reteriver",
        "name": "Oscar"
    }
]


// GET Route
router.get('/pets',async (context) =>{
    console.log(context.url)
    context.status = 200
    context.body = data
})

// GET BY ID Route
router.get('/pets/:id',async (context) =>{
    console.log('',context.url)
    context.body = data.find(element => element.id === context.params.id)
    context.status = 200
})

//DELETE BY ID route
router.delete('/pets/:id',async (context) =>{
    console.log('',context.url)
    const index = data.findIndex(element => element.id === context.params.id)
    const element = data[index]
    data.splice(index,1)
    context.body = data
})

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

router.post('/pets',async (context)=>{
    if(context.request.body == null)
    {
        context.throw(400,'Bad Request')
    }
    data.push(context.request.body)
    context.body = data
})

app.on('error', err => {
  console.error('server error', err)
});

// Registering routes with Application
app.use(router.routes())

app.listen(PORT)
console.log('Server is running on port',PORT)