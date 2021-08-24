import BaseRepository from './base.repository.js';
import { Tables } from '../commons/index.js';

class CategoriesRepository extends BaseRepository {
    constructor() {
        super(Tables.CATEGORIES);
    }
}

export default CategoriesRepository;
