import { escapeMessage } from '../helpers/index.js';
import { BotReplies, BOT_KEYBOARD } from '../commons/index.js';
import { UsersService, QuestionsService } from './index.js';

class BotService {
    constructor() {
        this.usersService = new UsersService();
        this.questionsService = new QuestionsService();
    }

    sendMessage(ctx, message, withKeyboard = false) {
        const escapedMessage = escapeMessage(message);
        ctx.replyWithMarkdownV2(
            escapedMessage,
            withKeyboard
                ? {
                      reply_markup: { keyboard: BOT_KEYBOARD },
                  }
                : null,
        );
    }

    start(ctx) {
        this.sendMessage(ctx, BotReplies.START);
    }

    help(ctx) {
        this.sendMessage(ctx, BotReplies.HELP);
    }

    stop(ctx) {
        this.sendMessage(ctx, BotReplies.STOP);
    }

    async question(ctx, categoryId) {
        const userId = ctx.update.message.from.id;
        let userStat =
            (await this.usersService.getStat(userId)) ||
            (await this.usersService.create(userId)).stat;

        const questionsNumber = await this.questionsService.getSizeOf(
            categoryId,
        );

        if (!questionsNumber) {
            return this.sendMessage(ctx, BotReplies.NO_QUESTIONS, true);
        }

        if (userStat.answered_adult_questions.length >= questionsNumber) {
            userStat = await this.usersService.updateStat(userId, {
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

        await this.usersService.updateStat(userId, {
            answered_adult_questions: [
                ...userStat.answered_adult_questions,
                question.id,
            ],
        });

        this.sendMessage(ctx, question.text, true);
    }
}

export default BotService;
