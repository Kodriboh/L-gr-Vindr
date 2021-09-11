'use strict';

const router = require('express').Router();

router.use('/api', router);

// Routes
router.get('/products', (req, res) => {
    res.send('Hello API!');
});

router.all('*', (req, res) => {
    res.status(400).render('404');
});

module.exports = router;