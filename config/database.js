const config = {
    mongo: {
        name: 'mongodb',
        port: process.env.DB_PORT || 27017,
        host: process.env.HOST || 'localhost',
        dbname: process.env.DB_NAME || 'appDb',
    },
    mysql: {
        name: 'mysql',
        port: process.env.DB_PORT || 3306,
        dbname: process.env.DB_NAME || 'appDb',
    },
    postgres: {
        name: 'psql',
        port: process.env.DB_PORT || 54324,
        dbname: process.env.DB_NAME || 'appDb',
    },
}

// Aliases 
config.mariaDb = config.mysql;
config.psql = config.postgres;

module.exports.mongo = config.mongo;
module.exports.mysql = config.mysql;
module.exports.psql = config.psql;