import SummonerController from '../controllers/summoner.controller';

const express = require('express')

const router = express.Router()

router.get('/:name', SummonerController.GetResults)

module.exports = router