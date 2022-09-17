const express = require('express')
const router = express.Router()
const ccpController = require('../controllers/ccpController')

router.get('/', ccpController.indexShield)
router.get('/:id', ccpController.getOneShield)
router.post('/', ccpController.createNewShield)
router.put('/:id', ccpController.updateShield)
router.delete('/:id', ccpController.deleteShield)

module.exports = router