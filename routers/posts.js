const express = require('express')
const router = express.Router()
const posts = require('../posts')

router.get('/', (req, res) => {
  res.json(posts)
})

router.get('/:id', (req, res) => {
  res.send(`View single post with the id: ${req.params.id}`)
})

router.post('/', (req, res) => {
  res.send('Store a new post into the array')
})

router.put('/:id', (req, res) => {
  res.send(`Update the element with id:${req.params.id}`)
})

router.patch('/:id', (req, res) => {
  res.send(`Modify the element with id:${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  res.send(`Destroy the element with id:${req.params.id}`)
})





module.exports = router;