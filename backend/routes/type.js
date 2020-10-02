const express = require('express')
const router = express.Router()
const Type = require('../models/type')


router.get('/', async (req, res) => {
    try {
        const type = await  Type.find()
        res.send({ok:true, info:type})
    } catch (err) {
        res.status(500).json({mesaage: err.message})
    }
})





module.exports = router