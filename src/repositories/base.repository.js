import { DatabaseClient } from '../database/index.js';

class BaseRepository {
    constructor(table) {
        this.database = new DatabaseClient(table);
        this.database.chooseTable(table);
    }

    async getById(id) {
        const foundModel = await this.database.findOne({ id });
        return foundModel;
    }

    async getWithOffset(offset, condition) {
        const foundModel = await this.database.getOneWithOffset(
            offset,
            condition,
        );
        return foundModel;
    }

    async updateById(id, updates) {
        const updatedModel = await this.database.updateOne({ id }, updates);
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
