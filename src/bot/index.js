import { Telegraf } from 'telegraf';
import { BotCommands, QuestionCategories } from '../commons/index.js';
import { BOT_TOKEN, PORT } from '../configs/index.js';
import { BotService } from '../services/index.js';

const bot = new Telegraf(BOT_TOKEN);
const botService = new BotService();

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

bot.hears(BotCommands.UNKNOWN, botService.unknown.bind(botService));

export default bot;
