import dotenv from 'dotenv';
dotenv.config();

const DATABASE_CONFIG = {
    connectionString: process.env.DB_URI,
    ssl: { rejectUnauthorized: false },
};

export default DATABASE_CONFIG;
