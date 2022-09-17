const express = require('express')
const router = express.Router()
const ccpController = require('../controllers/ccpController')

router.get('/', ccpController.indexFeat)
router.get('/:id', ccpController.getOneFeat)
router.post('/', ccpController.createNewFeat)
router.put('/:id', ccpController.updateFeat)
router.delete('/:id', ccpController.deleteFeat)

module.exports = router