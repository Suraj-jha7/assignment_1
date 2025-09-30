import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateItemDto } from '../dto/create-item.dto';
import { UpdateItemDto } from '../dto/update-item.dto';
import { Item } from '../entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(private databaseService: DatabaseService) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    
    const query = `
      INSERT INTO items (title, description, "isCompleted")
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    
    
    const values = [createItemDto.title, createItemDto.description, false];
    const result = await this.databaseService.query(query, values);
    
    
    return result.rows[0];
  }

  async findAll(): Promise<Item[]> {
    
    const query = 'SELECT * FROM items ORDER BY "createdAt" DESC';
    
    
    const result = await this.databaseService.query(query);
    return result.rows;
  }

  async findOne(id: number): Promise<Item | null> {
    
    const query = 'SELECT * FROM items WHERE id = $1';
    
    
    const result = await this.databaseService.query(query, [id]);
    
    
    return result.rows[0] || null;
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<Item | null> {
    
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

  async remove(id: number): Promise<{ affected: number }> {  
    const query = 'DELETE FROM items WHERE id = $1';
  
    const result = await this.databaseService.query(query, [id]);
    
    return { affected: result.rowCount || 0 };
  }
}
