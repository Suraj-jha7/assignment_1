import { OnModuleInit } from '@nestjs/common';
export declare class DatabaseService implements OnModuleInit {
    onModuleInit(): Promise<void>;
    private createTableIfNotExists;
    query(text: string, params?: any[]): Promise<any>;
    getClient(): Promise<any>;
    close(): Promise<void>;
}
