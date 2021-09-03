require('dotenv').config({ path: '../../.env' });

const SEQUALIZE_CONFIG = {
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
};

module.exports = SEQUALIZE_CONFIG;
