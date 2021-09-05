'use strict';

const router = require('express').Router();

router.get('/api/', (req, res) => {
    res.send('Hello API!');
});

module.exports = router;