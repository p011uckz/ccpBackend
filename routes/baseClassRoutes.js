const express = require('express')
const router = express.Router()
const ccpController = require('../controllers/ccpController')

router.get('/', ccpController.indexBaseClass)
router.get('/:id', ccpController.getOneBaseClass)
router.post('/', ccpController.createNewBaseClass)
router.put('/:id', ccpController.updateBaseClass)
router.delete('/:id', ccpController.deleteBaseClass)

module.exports = router