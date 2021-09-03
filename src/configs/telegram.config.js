import { config } from 'dotenv';
config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const PORT = process.env.PORT | 3000;

export { BOT_TOKEN, PORT };
