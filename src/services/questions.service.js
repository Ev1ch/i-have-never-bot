import { QuestionsRepository } from '../repositories/index.js';
import { getRandomNumber } from '../helpers/index.js';

class QuestionsService {
    constructor() {
        this.questionsRepository = new QuestionsRepository();
    }

    async getSizeOf(categoryId) {
        const questionsNumber = await this.questionsRepository.getSize({
            category_id: categoryId,
        });

        return questionsNumber;
    }

    async getRandomQuestionOf(categoryId) {
        const questionsNumber = await this.questionsRepository.getSize({
            category_id: categoryId,
        });

        let randomOffset = getRandomNumber(0, questionsNumber - 1);
        const question = await this.questionsRepository.getWithOffset(
            randomOffset,
            { category_id: categoryId },
        );

        return question;
    }
}

export default QuestionsService;
