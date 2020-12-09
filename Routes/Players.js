const express = require('express');
const Player = require('../Controllers/Players');
const router = express.Router();

router.post('/addPlayer', Player.addPlayer);
router.post('/deletePlayer', Player.deletePlayer);
router.post('/fetchPlayers', Player.fetchPlayers);

module.exports = router;
