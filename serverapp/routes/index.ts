const express = require('express')

const router = express.Router()

const Summoner = require('./summoner.routes')
const Champion = require('./champion.routes')

router.use('/summoner', Summoner)
router.use('/champion-mastery', Champion)

module.exports = router