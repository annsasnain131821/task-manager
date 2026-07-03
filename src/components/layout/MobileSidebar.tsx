import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type MobileSidebarProps = {
  items: Array<{ label: string; icon: ReactNode; active?: boolean }>
  onClose: () => void
}

export const MobileSidebar = ({ items, onClose }: MobileSidebarProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-20 bg-slate-950/80 backdrop-blur-sm lg:hidden"
        onClick={onClose}
      />
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.2 }}
        className="fixed inset-y-0 left-0 z-30 flex w-72 flex-col border-r border-white/10 bg-slate-950/95 px-5 py-6 lg:hidden"
      >
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
          <button className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white" onClick={onClose}>
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
      </motion.aside>
    </>
  )
}
