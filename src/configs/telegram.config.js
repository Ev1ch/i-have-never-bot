import { config } from 'dotenv';
config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const PORT = process.env.PORT;

export { BOT_TOKEN, PORT };
