const express = require('express')
const router = express.Router()
const ccpController = require('../controllers/ccpController')

router.get('/', ccpController.indexItem)
router.get('/:id', ccpController.getOneItem)
router.post('/', ccpController.createNewItem)
router.put('/:id', ccpController.updateItem)
router.delete('/:id', ccpController.deleteItem)


module.exports = router