const express = require('express')
const router = express.Router()
const ccpController = require('../controllers/ccpController')

router.get('/', ccpController.indexArmor)
router.get('/:id', ccpController.getOneArmor)
router.post('/', ccpController.createNewArmor)
router.put('/:id', ccpController.updateArmor)
router.delete('/:id', ccpController.deleteArmor)

module.exports = router