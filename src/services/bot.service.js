import { BotReplies } from '../commons/index.js';
import { sendMessage } from '../helpers/index.js';
import { UsersService, QuestionsService } from './index.js';

class BotService {
    constructor() {
        this.usersService = new UsersService();
        this.questionsService = new QuestionsService();
    }

    start(ctx) {
        sendMessage(ctx, BotReplies.START, true);
    }

    help(ctx) {
        sendMessage(ctx, BotReplies.HELP);
    }

    async reset(ctx) {
        const userId = ctx.update.message.from.id;
        const userStat = await this.usersService.getStatByUserId(userId);

        if (!userStat) {
            return sendMessage(ctx, BotReplies.NOTHING_TO_RESET);
        }

        await this.usersService.resetStatByUserId(userId);

        sendMessage(ctx, BotReplies.RESET);
    }

    stop(ctx) {
        sendMessage(ctx, BotReplies.STOP, false);
    }

    unknown(ctx) {
        sendMessage(ctx, BotReplies.UNKNOWN);
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
            return sendMessage(ctx, BotReplies.NO_QUESTIONS, true);
        }

        if (userStat.answered_adult_questions.length >= questionsNumber) {
            userStat = await this.usersService.updateStatByUserId(userId, {
                answered_adult_questions: [],
            });

            sendMessage(ctx, BotReplies.CATEGORY_FINISHED, true);
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

        sendMessage(ctx, question.text, true);
    }
}

export default BotService;
