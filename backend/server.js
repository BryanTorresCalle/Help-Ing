require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors");


mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true,useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DB'))

app.use(express.json())
app.use(cors());

const ucRouter = require('./routes/universal_content')
app.use('/universal_content', ucRouter)

const typeRouter = require('./routes/type')
app.use('/type', typeRouter)

app.listen(3001, () => console.log("Server started"))