import { Button } from '../common/Button'
import { Card } from '../common/Card'
import type { Task } from '../../types/task'

type TaskCardProps = {
  task: Task
  onToggleComplete: (id: string) => void
  onDeleteTask: (id: string) => void
}

const priorityStyles: Record<Task['priority'], string> = {
  Low: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  Medium: 'border-amber-400/20 bg-amber-400/10 text-amber-300',
  High: 'border-rose-400/20 bg-rose-400/10 text-rose-300',
}

export const TaskCard = ({ task, onToggleComplete, onDeleteTask }: TaskCardProps) => {
  return (
    <Card className="space-y-4 border-slate-800/80">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${priorityStyles[task.priority]}`}>
              {task.priority}
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{task.category}</p>
          </div>
          <h3 className={`mt-3 text-base font-semibold ${task.completed ? 'text-slate-500 line-through' : 'text-white'}`}>
            {task.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{task.description}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${task.completed ? 'bg-emerald-400/10 text-emerald-300' : 'bg-cyan-400/10 text-cyan-300'}`}>
          {task.completed ? 'Completed' : 'Active'}
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 pt-4">
        <p className="text-sm text-slate-500">Due {task.dueDate}</p>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => onToggleComplete(task.id)}>
            {task.completed ? 'Undo' : 'Complete'}
          </Button>
          <Button variant="ghost" onClick={() => onDeleteTask(task.id)}>
            Delete
          </Button>
        </div>
      </div>
    </Card>
  )
}
