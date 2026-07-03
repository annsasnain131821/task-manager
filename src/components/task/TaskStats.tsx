import { Card } from '../common/Card'

type TaskStatsProps = {
  total: number
  completed: number
  pending: number
}

export const TaskStats = ({ total, completed, pending }: TaskStatsProps) => {
  const items = [
    { label: 'Total', value: total },
    { label: 'Completed', value: completed },
    { label: 'Pending', value: pending },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <Card key={item.label} className="border-slate-800/80">
          <p className="text-sm text-slate-400">{item.label}</p>
          <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
        </Card>
      ))}
    </div>
  )
}
