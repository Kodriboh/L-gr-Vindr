module.exports.listen = (function (app) {
    return function () {
        app.listen(
            app.config.port,
            () => console.log(`${app.config.name} listening on port: ${app.config.port}...`)
        );
    }
});