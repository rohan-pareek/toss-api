const express = require('express');
const Teams = require('../Controllers/Teams');
const router = express.Router();

router.post('/pinTeams', Teams.pinTeams);
router.post('/fetchPinnedTeams', Teams.fetchPinnedTeams);

module.exports = router;
