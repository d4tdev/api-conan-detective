const express = require('express')
const router = express.Router()

const mainController = require('../controllers/mainController')

router.get('/', mainController.getAllCharacters);
router.get('/character/:name', mainController.getOneCharacter);

module.exports = router
