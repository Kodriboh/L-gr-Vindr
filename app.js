'use strict';

require('./config/global');

const Product = include('/models/product.js');

const { app } = include('/resources/bootstrap/app');

app.mongoConnect(app.dbconfig);

app.start();
