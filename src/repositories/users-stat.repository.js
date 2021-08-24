import { Tables } from '../commons/index.js';
import BaseRepository from './base.repository.js';

class UsersStatRepository extends BaseRepository {
    constructor() {
        super(Tables.USERS_STAT);
    }
}

export default UsersStatRepository;
