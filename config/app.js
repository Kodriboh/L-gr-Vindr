module.exports = {
    name: process.env.APP_NAME || 'Lágr-Vindr',
    port: process.env.PORT || 3000,
    debug: process.env.APP_DEBUG || false, 
    timezone: 'UTC',
    locale: 'en',
}