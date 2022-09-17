const express = require('express')
const router = express.Router()
const ccpController = require('../controllers/ccpController')

router.get('/', ccpController.indexSpell)
router.get('/:id', ccpController.getOneSpell)
router.post('/', ccpController.createNewSpell)
router.put('/:id', ccpController.updateSpell)
router.delete('/:id', ccpController.deleteSpell)

module.exports = router