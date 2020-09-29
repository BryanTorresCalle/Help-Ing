require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true,useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DB'))

app.use(express.json())

const ucRouter = require('./routes/universal_content')
app.use('/universal_content', ucRouter)

app.listen(3001, () => console.log("Server started"))