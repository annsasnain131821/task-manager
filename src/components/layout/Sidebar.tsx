import type { ReactNode } from 'react'

type SidebarProps = {
  items: Array<{ label: string; icon: ReactNode; active?: boolean }>
  isOpen?: boolean
  onClose?: () => void
}

export const Sidebar = ({ items, isOpen = true, onClose }: SidebarProps) => {
  return (
    <aside className={`fixed inset-y-0 left-0 z-30 flex w-72 flex-col border-r border-white/10 bg-slate-950/95 px-5 py-6 backdrop-blur-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:translate-x-0`}>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-sm font-semibold text-white">
            S
          </div>
          <div>
            <p className="text-sm font-semibold text-white">SkyPilot</p>
            <p className="text-xs text-slate-400">Workspace</p>
          </div>
        </div>
        <button className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white lg:hidden" onClick={onClose}>
          ✕
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {items.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${item.active ? 'bg-cyan-500/15 text-cyan-200' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-sm text-cyan-100">
        <p className="font-semibold">Focus mode enabled</p>
        <p className="mt-1 text-cyan-200/80">A quiet surface for strategic work.</p>
      </div>
    </aside>
  )
}
