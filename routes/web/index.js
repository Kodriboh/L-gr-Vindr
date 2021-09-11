'use strict';

const router = require('express').Router();

router.get('/', (req, res) => (
    res.render('index')
));

router.all('*', (req, res) => {
    res.status(400).render('404')
});

module.exports = router;