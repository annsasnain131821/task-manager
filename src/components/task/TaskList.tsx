import { Card } from '../common/Card'
import type { Task } from '../../types/task'
import { TaskCard } from './TaskCard'

type TaskListProps = {
  tasks: Task[]
  onToggleComplete: (id: string) => void
  onDeleteTask: (id: string) => void
}

export const TaskList = ({ tasks, onToggleComplete, onDeleteTask }: TaskListProps) => {
  return (
    <Card className="space-y-4 border-slate-800/80">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-white">Task list</p>
          <p className="mt-1 text-sm text-slate-400">Keep your priorities visible and easy to manage.</p>
        </div>
        <span className="rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1 text-sm text-slate-400">
          {tasks.length} items
        </span>
      </div>

      {tasks.length === 0 ? (
        <div className="rounded-[1.25rem] border border-dashed border-slate-700 bg-slate-950/60 p-6 text-center text-sm text-slate-400">
          No tasks yet. Add your first task above.
        </div>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onToggleComplete={onToggleComplete} onDeleteTask={onDeleteTask} />
          ))}
        </div>
      )}
    </Card>
  )
}
