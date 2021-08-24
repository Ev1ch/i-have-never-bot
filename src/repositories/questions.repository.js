import BaseRepository from './base.repository.js';
import { Tables } from '../commons/index.js';

class QuestionsRepository extends BaseRepository {
    constructor() {
        super(Tables.QUESTIONS);
    }
}

export default QuestionsRepository;
