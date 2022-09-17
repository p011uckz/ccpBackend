const express = require('express')
const router = express.Router()
const ccpController = require('../controllers/ccpController')

router.get('/', ccpController.indexPrestigeClass)
router.get('/:id', ccpController.getOnePrestigeClass)
router.post('/', ccpController.createNewPrestigeClass)
router.put('/:id', ccpController.updatePrestigeClass)
router.delete('/:id', ccpController.deletePrestige)

module.exports = router