import { UsersRepository, UsersStatRepository } from '../repositories/index.js';

class UsersService {
    constructor() {
        this.usersRepository = new UsersRepository();
        this.usersStatRepository = new UsersStatRepository();
    }

    async create(id) {
        const createdStat = await this.usersStatRepository.add();
        const createdUser = await this.usersRepository.add({
            id,
            stat_id: createdStat.id,
        });

        return { ...createdUser, stat: createdStat };
    }

    async getStat(userId) {
        const user = await this.usersRepository.getById(userId);

        if (!user) {
            return null;
        }

        const stat = await this.usersStatRepository.getById(user.stat_id);

        return stat;
    }

    async updateStat(userId, stat) {
        const user = await this.usersRepository.getById(userId);
        const updatedStat = await this.usersStatRepository.updateById(
            user.stat_id,
            stat,
        );

        return updatedStat;
    }

    async resetStat(userId) {
        this.updateStat(userId, {
            answered_questions: [],
            answered_adult_questions: [],
        });
    }
}

export default UsersService;
