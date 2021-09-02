import pg from 'pg';
import { DATABASE_CONFIG } from '../configs/index.js';
import { mapObjectToQuery, mapObjectToValues } from '../helpers/index.js';
const { Client } = pg;

class DatabaseClient {
    constructor() {
        this.client = new Client(DATABASE_CONFIG);
    }

    async connect() {
        await this.client.connect();
        this.isConencted = true;
    }

    async disconnect() {
        await this.client.end();
        this.isConencted = false;
    }

    chooseTable(table) {
        this.table = table;
    }

    async findOne(condition) {
        if (!this.isConencted) {
            await this.connect();
        }

        const {
            rows: [item],
        } = await this.client.query(
            `SELECT * FROM ${this.table} WHERE ${mapObjectToQuery(
                condition,
            )} LIMIT 1`,
            mapObjectToValues(condition),
        );

        return item;
    }

    async getOneWithOffset(offset, condition) {
        if (!this.isConencted) {
            await this.connect();
        }

        const {
            rows: [item],
        } = await this.client.query(
            `SELECT * FROM ${this.table} ${
                condition ? `WHERE ${mapObjectToQuery(condition)}` : ''
            } LIMIT 1 OFFSET $${
                condition ? Object.keys(condition).length + 1 : 1
            }`,
            condition ? [...mapObjectToValues(condition), offset] : [offset],
        );

        return item;
    }

    async updateOne(condition, updates) {
        if (!this.isConencted) {
            await this.connect();
        }

        const {
            rows: [updatedItem],
        } = await this.client.query(
            `UPDATE ${this.table} SET ${mapObjectToQuery(updates, {
                separator: ',',
            })} WHERE ${mapObjectToQuery(condition, {
                startIndex: Object.keys(updates).length + 1,
            })} RETURNING *`,
            [...mapObjectToValues(updates), ...mapObjectToValues(condition)],
        );

        return updatedItem;
    }

    async create(item) {
        if (!this.isConencted) {
            await this.connect();
        }

        const {
            rows: [addedItem],
        } = await this.client.query(
            `INSERT INTO ${this.table} ${
                item
                    ? `VALUES (${mapObjectToQuery(item, {
                          startIndex: 1,
                          separator: ',',
                          setKeys: false,
                      })})`
                    : `DEFAULT VALUES`
            } RETURNING *`,
            item ? mapObjectToValues(item) : undefined,
        );

        return addedItem;
    }

    async getSize(condition) {
        if (!this.isConencted) {
            await this.connect();
        }

        const {
            rows: [{ size }],
        } = await this.client.query(
            `SELECT COUNT(*) as size FROM ${this.table} ${
                condition ? `WHERE ${mapObjectToQuery(condition)}` : ''
            }`,
            condition ? mapObjectToValues(condition) : undefined,
        );

        return +size;
    }
}

export default DatabaseClient;
