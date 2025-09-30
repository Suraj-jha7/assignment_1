'use client';

import { useState, useEffect } from 'react';
import { Task } from '@/types/task';
import { api } from '@/services/api';

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await api.getTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id: number) => {
    if (confirm('Are you sure?')) {
      try {
        await api.deleteTask(id);
        setTasks(tasks.filter(task => task.id !== id));
      } catch (error) {
        alert('Error deleting task');
      }
    }
  };

  const toggleComplete = async (id: number, isCompleted: boolean) => {
    try {
      await api.updateTask(id, { isCompleted: !isCompleted });
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, isCompleted: !isCompleted } : task
      ));
    } catch (error) {
      alert('Error updating task');
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Tasks</h1>
          <a href="/create" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + New Task
          </a>
        </div>

        {tasks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No tasks yet!</p>
            <a href="/create" className="text-blue-600 hover:underline">Create your first task</a>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tasks.map((task) => (
                  <tr key={task.id} className={task.isCompleted ? 'bg-gray-50' : ''}>
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={() => toggleComplete(task.id, task.isCompleted)}
                        className="h-4 w-4 text-blue-600 rounded"
                      />
                      <span className={`ml-2 ${task.isCompleted ? 'text-green-600' : 'text-blue-600'}`}>
                        {task.isCompleted ? 'Done' : 'Pending'}
                      </span>
                    </td>
                    <td className={`px-6 py-4 ${task.isCompleted ? 'line-through text-gray-500' : 'font-medium'}`}>
                      {task.title}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{task.description}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <a
                          href={`/edit/${task.id}`}
                          className="text-blue-600 hover:underline text-sm"
                        >
                          Edit
                        </a>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="text-red-600 hover:underline text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
