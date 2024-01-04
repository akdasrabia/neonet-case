const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require("mongoose")
const Product = require('./models/productModel')
const MovieRouter = require('./routers/MovieRouter')
const ActorRouter = require('./routers/ActorRouter')
const CategoryRouter = require('./routers/CategoryRouter')

mongoose.set("strictQuery", false)
 mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to Database")
 }).catch((err) => {
    console.log(err)
 })



 app.use(express.json());

app.get('/' , (req, res) => {
    res.send('Res send')
})

app.use('/movie', MovieRouter)
app.use('/actor', ActorRouter)
app.use('/category', CategoryRouter)


app.post('/product', async (req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(err) {
        res.status(400).json({message: err.message})
    }

})

app.get('/product', async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products)

    }catch(err) {
        res.status(400).json({message: err.message})
    }
})


app.listen(5500, () => console.log('Server started')) 


