import { Injectable, OnModuleInit } from '@nestjs/common';
import { pool } from '../../database.config';

@Injectable()
export class DatabaseService implements OnModuleInit {
  async onModuleInit() {
    // Initialize database connection and create table if it doesn't exist
    await this.createTableIfNotExists();
  }

  private async createTableIfNotExists() {
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
      await pool.query(query);
      console.log('Items table created or already exists');
    } catch (error) {
      console.error('Error creating items table:', error);
      throw error;
    }
  }

  async query(text: string, params?: any[]) {
    try {
      const result = await pool.query(text, params);
      return result;
    } catch (error) {
      console.error('Database query error:', error);
      throw error;
    }
  }

  async getClient() {
    return pool.connect();
  }

  async close() {
    await pool.end();
  }
}
