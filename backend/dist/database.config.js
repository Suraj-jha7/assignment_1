"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = exports.databaseConfig = void 0;
const pg_1 = require("pg");
exports.databaseConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    user: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'tasks_manager',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
};
exports.pool = new pg_1.Pool(exports.databaseConfig);
exports.pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});
//# sourceMappingURL=database.config.js.map