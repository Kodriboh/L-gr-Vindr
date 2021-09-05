'use strict';

require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();

app.config = include('/config/app');

app.use(express.static(path.join('./', 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join('./', 'views'));

app.start = include('/utils/overrides.js').listen(app);

module.exports = { app };