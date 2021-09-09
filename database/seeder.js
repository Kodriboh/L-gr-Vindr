'use strict';

require('../config/global');

const { app } = include('/resources/bootstrap/app');

app.mongoConnect(app.dbconfig);

include('/database/seeders/productSeeder.js')()
    .then(res => console.log(res))
    .catch(err => console.log(err));