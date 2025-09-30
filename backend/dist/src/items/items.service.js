"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let ItemsService = class ItemsService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createItemDto) {
        const query = `
      INSERT INTO items (title, description, "isCompleted")
      VALUES ($1, $2, $3)
      RETURNING *
    `;
        const values = [createItemDto.title, createItemDto.description, false];
        const result = await this.databaseService.query(query, values);
        return result.rows[0];
    }
    async findAll() {
        const query = 'SELECT * FROM items ORDER BY "createdAt" DESC';
        const result = await this.databaseService.query(query);
        return result.rows;
    }
    async findOne(id) {
        const query = 'SELECT * FROM items WHERE id = $1';
        const result = await this.databaseService.query(query, [id]);
        return result.rows[0] || null;
    }
    async update(id, updateItemDto) {
        const fields = [];
        const values = [];
        let paramCount = 1;
        if (updateItemDto.title !== undefined) {
            fields.push(`title = $${paramCount++}`);
            values.push(updateItemDto.title);
        }
        if (updateItemDto.description !== undefined) {
            fields.push(`description = $${paramCount++}`);
            values.push(updateItemDto.description);
        }
        if (updateItemDto.isCompleted !== undefined) {
            fields.push(`"isCompleted" = $${paramCount++}`);
            values.push(updateItemDto.isCompleted);
        }
        if (fields.length === 0) {
            return null;
        }
        values.push(id);
        const query = `
      UPDATE items 
      SET ${fields.join(', ')}
      WHERE id = $${paramCount}
      RETURNING *
    `;
        const result = await this.databaseService.query(query, values);
        return result.rows[0] || null;
    }
    async remove(id) {
        const query = 'DELETE FROM items WHERE id = $1';
        const result = await this.databaseService.query(query, [id]);
        return { affected: result.rowCount || 0 };
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ItemsService);
//# sourceMappingURL=items.service.js.map