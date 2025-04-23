import MatchController from '../controllers/match.controller';

const express = require('express')

const router = express.Router()

router.get('/:encryptedPUUID', MatchController.GetLatestMatches)

module.exports = router
