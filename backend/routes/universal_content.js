const express = require('express')
const router = express.Router()
const Universal = require('../models/universal_content')


router.get('/', async (req, res) => {
    try {
        const universal_content = await  Universal.find()
        res.send({ok:true, info:universal_content})
    } catch (err) {
        res.status(500).json({mesaage: err.message})
    }
})


router.get('/:id', (req, res) => {
    res.json(res.universal_content);
})


router.post('/', async (req, res) => {
     universal_content = new Universal({
        title: req.body.title,
        author: req.body.author,
        url: req.body.url,
        file: req.body.file,
        type: req.body.type
    })

    try {
        const newUC = await universal_content.save();
        res.status(201).json(newUC);
      } catch (err) {
        res.status(400).json({ message: err.message, universal_content : req.body});
      }
    
})

router.patch('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})

module.exports = router