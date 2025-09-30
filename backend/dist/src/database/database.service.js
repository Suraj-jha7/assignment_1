"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../../database.config");
let DatabaseService = class DatabaseService {
    async onModuleInit() {
        await this.createTableIfNotExists();
    }
    async createTableIfNotExists() {
        const query = `
      CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        "isCompleted" BOOLEAN DEFAULT FALSE,
        "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
        try {
            await database_config_1.pool.query(query);
            console.log('Items table created or already exists');
        }
        catch (error) {
            console.error('Error creating items table:', error);
            throw error;
        }
    }
    async query(text, params) {
        try {
            const result = await database_config_1.pool.query(text, params);
            return result;
        }
        catch (error) {
            console.error('Database query error:', error);
            throw error;
        }
    }
    async getClient() {
        return database_config_1.pool.connect();
    }
    async close() {
        await database_config_1.pool.end();
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)()
], DatabaseService);
//# sourceMappingURL=database.service.js.map