const express = require('express')
const router = express.Router()
const ccpController = require('../controllers/ccpController')

router.get('/', ccpController.indexWeapon)
router.get('/:id', ccpController.getOneWeapon)
router.post('/', ccpController.createNewWeapon)
router.put('/:id', ccpController.updateWeapon)
router.delete('/:id', ccpController.deleteWeapon)

module.exports = router