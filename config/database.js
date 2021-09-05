const dbs = {
    mongo: {
        name: 'mongo',
        port: process.env.DB_PORT || 27017,
        host: process.env.HOST || 'localhost',
        db: process.env.DB_NAME || 'appDb',
    },
    mysql: {
        name: 'mysql',
        port: process.env.DB_PORT || 3306,
    },
    postgres: {
        name: 'psql',
        port: process.env.DB_PORT || 54324,
    },
}

dbs.mariaDb = dbs.mysql;
dbs.psql = dbs.postgres;

module.exports = dbs;