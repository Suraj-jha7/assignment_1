
export interface Item {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
}


export interface CreateItemData {
  title: string;
  description: string;
  isCompleted?: boolean;
}


export interface UpdateItemData {
  title?: string;
  description?: string;
  isCompleted?: boolean;
}
