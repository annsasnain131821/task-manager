import type { Task } from '../types/task'

export const mockTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Refine onboarding flow',
    description: 'Polish the welcome experience and update empty states.',
    completed: false,
    priority: 'High',
    category: 'Design',
    dueDate: 'Today',
  },
  {
    id: 'task-2',
    title: 'Prepare release notes',
    description: 'Draft a concise summary of the latest improvements.',
    completed: true,
    priority: 'Medium',
    category: 'Product',
    dueDate: 'Tomorrow',
  },
  {
    id: 'task-3',
    title: 'Review marketing assets',
    description: 'Confirm the latest visuals match the updated brand direction.',
    completed: false,
    priority: 'Low',
    category: 'Marketing',
    dueDate: 'Next week',
  },
]
