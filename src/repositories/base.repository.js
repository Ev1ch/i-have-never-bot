import { DatabaseClient } from '../database/index.js';

class BaseRepository {
    constructor(table) {
        this.database = new DatabaseClient(table);
        this.database.chooseTable(table);
    }

    async getById(id) {
        const model = await this.database.findOne({ id });
        return model;
    }

    async getWithOffset(offset, condition) {
        const model = await this.database.getOneWithOffset(offset, condition);
        return model;
    }

    async updateById(id, updates) {
        const updatedModel = await this.database.updateOne(
            {
                id,
            },
            updates,
        );
        return updatedModel;
    }

    async add(model) {
        const addedModel = await this.database.create(model);
        return addedModel;
    }

    async getSize(condition) {
        const size = await this.database.getSize(condition);
        return size;
    }
}

export default BaseRepository;
