import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Button } from '../components/common/Button'
import { Card } from '../components/common/Card'
import { DashboardLayout } from '../components/layout/DashboardLayout'
import { TaskForm } from '../components/task/TaskForm'
import { TaskList } from '../components/task/TaskList'
import { TaskStats } from '../components/task/TaskStats'
import { mockTasks } from '../data/tasks'
import type { Task, TaskPriority } from '../types/task'

const navItems = [
  { label: 'Overview', icon: '◉', active: true },
  { label: 'Workspace', icon: '◌' },
  { label: 'Projects', icon: '◌' },
  { label: 'Library', icon: '◌' },
  { label: 'Settings', icon: '◌' },
]

export const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)

  const stats = useMemo(() => {
    const completed = tasks.filter((task) => task.completed).length
    return {
      total: tasks.length,
      completed,
      pending: tasks.length - completed,
    }
  }, [tasks])

  const handleAddTask = (task: {
    title: string
    description: string
    priority: TaskPriority
    category: string
    dueDate: string
  }) => {
    setTasks((currentTasks) => [
      {
        id: `${Date.now()}`,
        completed: false,
        ...task,
      },
      ...currentTasks,
    ])
  }

  const handleToggleComplete = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    )
  }

  const handleDeleteTask = (id: string) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  }

  return (
    <DashboardLayout title="Command Center" subtitle="A polished SaaS workspace" navItems={navItems}>
      <div className="space-y-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_30px_80px_-35px_rgba(2,8,23,0.95)] sm:p-8"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                Welcome back
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A calm, premium home for your daily flow.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                This space is intentionally minimal and elegant, built for clarity, focus, and future growth.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button>Open workspace</Button>
                <Button variant="secondary">View brief</Button>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-950/70 p-5 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Current focus</p>
              <p className="mt-3 text-lg font-semibold text-white">Design the next launch sprint</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                Simple structure. Clear priorities. Zero clutter.
              </p>
            </div>
          </div>
        </motion.section>

        <TaskStats total={stats.total} completed={stats.completed} pending={stats.pending} />

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <TaskForm onAddTask={handleAddTask} />
          <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDeleteTask={handleDeleteTask} />
        </div>

        <Card className="space-y-4 border-slate-800/80">
          <div>
            <p className="text-lg font-semibold text-white">Workspace overview</p>
            <p className="mt-1 text-sm text-slate-400">A refined surface for future modules and workflows.</p>
          </div>

          <div className="rounded-[1.5rem] border border-dashed border-slate-700 bg-slate-950/60 p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
              ✦
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">Everything stays premium and calm</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-400">
              The task module fits naturally into the existing dashboard without disrupting the overall visual language.
            </p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
