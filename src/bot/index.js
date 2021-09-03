import { Telegraf } from 'telegraf';
import { BotCommands, QuestionCategories } from '../commons/index.js';
import { BOT_TOKEN, PORT } from '../configs/index.js';
import { logMiddleware, errorMiddleware } from '../middlewares/index.js';
import { BotService } from '../services/index.js';

const bot = new Telegraf(BOT_TOKEN);
const botService = new BotService();

bot.use(logMiddleware);

bot.catch(errorMiddleware);

bot.start(botService.start.bind(botService));

bot.startWebhook('/', null, PORT);

bot.help(botService.help.bind(botService));

bot.hears(BotCommands.RESET, botService.reset.bind(botService));

bot.hears(BotCommands.STOP, botService.stop.bind(botService));

bot.hears(BotCommands.QUESTION, (ctx) =>
    botService.question.bind(botService)(ctx, QuestionCategories.SIMPLE),
);

bot.hears(BotCommands.ADULT_QUESTION, (ctx) =>
    botService.question.bind(botService)(ctx, QuestionCategories.ADULT),
);

bot.on(BotCommands.UNKNOWN, botService.unknown.bind(botService));

export default bot;
