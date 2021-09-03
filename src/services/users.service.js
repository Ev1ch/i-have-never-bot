import { UsersRepository, UsersStatRepository } from '../repositories/index.js';

class UsersService {
    constructor() {
        this.usersRepository = new UsersRepository();
        this.usersStatRepository = new UsersStatRepository();
    }

    async createUser(id) {
        const createdStat = await this.usersStatRepository.add();
        const createdUser = await this.usersRepository.add({
            id,
            stat_id: createdStat.id,
        });

        return { ...createdUser, stat: createdStat };
    }

    async getStatByUserId(userId) {
        const user = await this.usersRepository.getById(userId);

        if (!user) {
            return null;
        }

        const stat = await this.usersStatRepository.getById(user.stat_id);

        return stat;
    }

    async updateStatByUserId(userId, stat) {
        const user = await this.usersRepository.getById(userId);
        const updatedStat = await this.usersStatRepository.updateById(
            user.stat_id,
            stat,
        );

        return updatedStat;
    }

    async resetStatByUserId(userId) {
        this.updateStat(userId, {
            answered_questions: [],
            answered_adult_questions: [],
        });
    }
}

export default UsersService;
