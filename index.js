import bot from './src/bot/index.js';
import { PORT, URL } from './src/configs/index.js';

bot.launch({
    webhook: {
        domain: URL,
        port: PORT,
    },
})
    .then(() => console.log(`Bot started on port ${PORT}`))
    .catch(console.error);
