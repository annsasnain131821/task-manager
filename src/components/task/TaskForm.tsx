import { useState } from 'react'
import { Button } from '../common/Button'
import { Card } from '../common/Card'
import { Input } from '../common/Input'
import type { TaskPriority } from '../../types/task'

type TaskFormProps = {
  onAddTask: (task: {
    title: string
    description: string
    priority: TaskPriority
    category: string
    dueDate: string
  }) => void
}

const initialState = {
  title: '',
  description: '',
  priority: 'Medium' as TaskPriority,
  category: 'General',
  dueDate: '',
}

export const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [form, setForm] = useState(initialState)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!form.title.trim()) {
      return
    }

    onAddTask({
      title: form.title.trim(),
      description: form.description.trim(),
      priority: form.priority,
      category: form.category.trim() || 'General',
      dueDate: form.dueDate.trim() || 'Scheduled',
    })

    setForm(initialState)
  }

  return (
    <Card className="space-y-4 border-slate-800/80">
      <div>
        <p className="text-lg font-semibold text-white">Task form</p>
        <p className="mt-1 text-sm text-slate-400">Capture a new task with a polished, lightweight form.</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          placeholder="Task title"
          value={form.title}
          onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
        />

        <textarea
          className="min-h-24 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500"
          placeholder="Add a short description"
          value={form.description}
          onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-400">
            <span>Priority</span>
            <select
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none"
              value={form.priority}
              onChange={(event) => setForm((current) => ({ ...current, priority: event.target.value as TaskPriority }))}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>

          <label className="space-y-2 text-sm text-slate-400">
            <span>Category</span>
            <Input
              placeholder="Category"
              value={form.category}
              onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
            />
          </label>
        </div>

        <Input
          type="text"
          placeholder="Due date"
          value={form.dueDate}
          onChange={(event) => setForm((current) => ({ ...current, dueDate: event.target.value }))}
        />

        <Button type="submit" className="w-full">
          Add task
        </Button>
      </form>
    </Card>
  )
}
