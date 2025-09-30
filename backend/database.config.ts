
import { Pool } from 'pg';

export const databaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  user: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'tasks_manager',
  max: 20, 
  idleTimeoutMillis: 30000, 
  connectionTimeoutMillis: 2000, 
};

export const pool = new Pool(databaseConfig);

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});
