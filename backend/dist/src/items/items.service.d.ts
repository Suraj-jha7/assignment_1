import { DatabaseService } from '../database/database.service';
import { CreateItemDto } from '../dto/create-item.dto';
import { UpdateItemDto } from '../dto/update-item.dto';
import { Item } from '../entities/item.entity';
export declare class ItemsService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    create(createItemDto: CreateItemDto): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: number): Promise<Item | null>;
    update(id: number, updateItemDto: UpdateItemDto): Promise<Item | null>;
    remove(id: number): Promise<{
        affected: number;
    }>;
}
