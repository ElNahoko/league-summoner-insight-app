const express = require('express')

const router = express.Router()

const Summoner = require('./summoner.routes')
const Champion = require('./champion.routes')
const Match = require('./match.routes')

router.use('/summoner', Summoner)
router.use('/champion-mastery', Champion)
router.use('/match', Match)

module.exports = router
