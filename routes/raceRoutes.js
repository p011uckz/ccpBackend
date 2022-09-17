const express = require('express')
const router = express.Router()
const ccpController = require('../controllers/ccpController')

router.get('/', ccpController.indexRace)
router.get('/:id', ccpController.getOneRace)
router.post('/', ccpController.createNewRace)
router.put('/:id', ccpController.updateRace)
router.delete('/:id', ccpController.deleteRace)


module.exports = router