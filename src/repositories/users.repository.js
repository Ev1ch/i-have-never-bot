import BaseRepository from './base.repository.js';
import { Tables } from '../commons/index.js';

class UsersRepository extends BaseRepository {
    constructor() {
        super(Tables.USERS);
    }
}

export default UsersRepository;
