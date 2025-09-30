'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Task, UpdateTask } from '@/types/task';
import { api } from '@/services/api';

export default function EditTaskPage() {
  const params = useParams();
  const taskId = parseInt(params.id as string);

  const [task, setTask] = useState<Task | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    loadTask();
  }, [taskId]);

  const loadTask = async () => {
    try {
      const response = await fetch(`http://localhost:3001/items/${taskId}`);
      const data = await response.json();
      setTask(data);
      setTitle(data.title);
      setDescription(data.description);
      setIsCompleted(data.isCompleted);
    } catch (error) {
      console.error('Error loading task:', error);
      alert('Task not found');
      window.location.href = '/';
    } finally {
      setFetching(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      alert('Please fill in both fields');
      return;
    }

    setLoading(true);
    try {
      await api.updateTask(taskId, { title, description, isCompleted });
      window.location.href = '/';
    } catch (error) {
      alert('Error updating task');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!task) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600">Task not found</p>
        <a href="/" className="text-blue-600 hover:underline">Back to Tasks</a>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <a href="/" className="text-blue-600 hover:underline">← Back to Tasks</a>
          <h1 className="text-3xl font-bold mt-4">Edit Task</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={(e) => setIsCompleted(e.target.checked)}
                className="h-4 w-4 text-blue-600 rounded"
                disabled={loading}
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                Mark as completed
              </span>
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task title..."
              disabled={loading}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task description..."
              disabled={loading}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => {
                setTitle(task.title);
                setDescription(task.description);
                setIsCompleted(task.isCompleted);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              disabled={loading}
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
