import { escapeMessage } from '../helpers/index.js';
import { BotReplies, BOT_KEYBOARD, REMOVE_KEYBOARD } from '../commons/index.js';
import { UsersService, QuestionsService } from './index.js';

class BotService {
    constructor() {
        this.usersService = new UsersService();
        this.questionsService = new QuestionsService();
    }

    sendMessage(ctx, message, withKeyboard) {
        const escapedMessage = escapeMessage(message);
        ctx.replyWithMarkdownV2(
            escapedMessage,
            withKeyboard === true
                ? { reply_markup: BOT_KEYBOARD }
                : withKeyboard === false
                ? { reply_markup: REMOVE_KEYBOARD }
                : null,
        );
    }

    start(ctx) {
        this.sendMessage(ctx, BotReplies.START, true);
    }

    help(ctx) {
        this.sendMessage(ctx, BotReplies.HELP);
    }

    async reset(ctx) {
        const userId = ctx.update.message.from.id;
        const userStat = await this.usersService.getStatByUserId(userId);

        if (!userStat) {
            return this.sendMessage(ctx, BotReplies.NOTHING_TO_RESET);
        }

        await this.usersService.resetStatByUserId(userId);

        this.sendMessage(ctx, BotReplies.RESET);
    }

    stop(ctx) {
        this.sendMessage(ctx, BotReplies.STOP, false);
    }

    unknown(ctx) {
        this.sendMessage(ctx, BotReplies.UNKNOWN);
    }

    async question(ctx, categoryId) {
        const userId = ctx.update.message.from.id;
        let userStat =
            (await this.usersService.getStatByUserId(userId)) ||
            (await this.usersService.createUser(userId)).stat;

        const questionsNumber = await this.questionsService.getSizeOf(
            categoryId,
        );

        if (!questionsNumber) {
            return this.sendMessage(ctx, BotReplies.NO_QUESTIONS, true);
        }

        if (userStat.answered_adult_questions.length >= questionsNumber) {
            userStat = await this.usersService.updateStatByUserId(userId, {
                answered_adult_questions: [],
            });

            this.sendMessage(ctx, BotReplies.CATEGORY_FINISHED, true);
        }

        let question;
        do {
            question = await this.questionsService.getRandomQuestionOf(
                categoryId,
            );
        } while (userStat.answered_adult_questions.includes(question.id));

        await this.usersService.updateStatByUserId(userId, {
            answered_adult_questions: [
                ...userStat.answered_adult_questions,
                question.id,
            ],
        });

        this.sendMessage(ctx, question.text, true);
    }
}

export default BotService;
