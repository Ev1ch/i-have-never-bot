import bot from './src/bot/index.js';
import { PORT } from './src/configs/index.js';

bot.launch()
    .then(() => console.log(`Bot started on port ${PORT}`))
    .catch(console.error);
