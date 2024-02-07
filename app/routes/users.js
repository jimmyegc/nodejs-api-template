const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/users')

router.get('/', checkOrigin, getItems)
router.get('/:id', getItem)
router.post('/', createItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

module.exports = router