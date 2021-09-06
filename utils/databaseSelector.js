module.exports = (function() { 
    switch(process.env.DB) {
        case 'mongo' || 'mongodb':
            return include('/config/database.js').mongo;
        case 'postgres' || 'psql':
            return include('/config/database.js').postgres;
        case 'mysql' || 'mariadb':
            return include('/config/database.js').mysql;
        default:
            return include('/config/database.js').mongo;
    }
})();