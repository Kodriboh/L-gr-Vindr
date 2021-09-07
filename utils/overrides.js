const mongoose = require('mongoose');

module.exports.listen = (function (app) {
    return function () {
        app.listen(
            app.config.port,
            () => console.log(`${app.config.name} listening on port: ${app.config.port}...`)
        );
    }
});

module.exports.mongoConnect = (function (dbconfig) {
    const dburl = `${dbconfig.name}://${dbconfig.host}:${dbconfig.port}/${dbconfig.dbname}`;

    mongoose.connect(dburl)
        .then(() => {
            console.log(`Successfully connected to ${dbconfig.dbname} on ${dbconfig.port}.`);
        })
        .catch(err => console.log(err));
});