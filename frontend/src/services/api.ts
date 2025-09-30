import { Task, CreateTask, UpdateTask } from '@/types/task';

const API_URL = 'http://localhost:3001';

export const api = {

  async getTasks(): Promise<Task[]> {
    const response = await fetch(`${API_URL}/items`);
    return response.json();
  },


  async createTask(task: CreateTask): Promise<Task> {
    const response = await fetch(`${API_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    return response.json();
  },


  async updateTask(id: number, task: UpdateTask): Promise<Task> {
    const response = await fetch(`${API_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    return response.json();
  },


  async deleteTask(id: number): Promise<void> {
    await fetch(`${API_URL}/items/${id}`, {
      method: 'DELETE',
    });
  },
};
