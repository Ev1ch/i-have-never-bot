const DATABASE_CONFIG = {
    connectionString: process.env.DB_URI,
    ssl: { rejectUnauthorized: false },
};

export default DATABASE_CONFIG;
