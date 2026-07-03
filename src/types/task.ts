export type TaskPriority = 'Low' | 'Medium' | 'High'

export interface Task {
  id: string
  title: string
  description: string
  completed: boolean
  priority: TaskPriority
  category: string
  dueDate: string
}
