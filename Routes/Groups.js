const express = require('express');
const Group = require('../Controllers/Groups');
const router = express.Router();

router.post('/addGroup', Group.addGroup);
router.post('/login', Group.login);

module.exports = router;
