import ChampionController from '../controllers/champion.controller';

const express = require('express')

const router = express.Router()

router.get('/:encryptedPUUID', ChampionController.GetResults)

module.exports = router