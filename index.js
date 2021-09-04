import bot from './src/bot/index.js';
import { LAUNCH_CONFIG, PORT } from './src/configs/index.js';

bot.launch(LAUNCH_CONFIG)
    .then(() => console.log(`Bot started on port ${PORT}`))
    .catch(console.error);
