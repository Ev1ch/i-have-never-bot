import { config } from 'dotenv';
config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const PORT = process.env.PORT || 3000;
const URL = process.env.APP_URL || '';

export { BOT_TOKEN, PORT, URL };
