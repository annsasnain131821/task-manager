import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { MobileSidebar } from './MobileSidebar'

type DashboardLayoutProps = {
  children: ReactNode
  title: string
  subtitle?: string
  navItems: Array<{ label: string; icon: ReactNode; active?: boolean }>
}

export const DashboardLayout = ({ children, title, subtitle, navItems }: DashboardLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617,_#0f172a)] text-slate-100">
      <Sidebar items={navItems} onClose={() => setMobileOpen(false)} />
      <AnimatePresence>
        {mobileOpen ? <MobileSidebar items={navItems} onClose={() => setMobileOpen(false)} /> : null}
      </AnimatePresence>

      <div className="lg:pl-72">
        <Navbar title={title} subtitle={subtitle} onMenuClick={() => setMobileOpen(true)} />
        <motion.main
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="px-4 py-6 sm:px-6 lg:px-8"
        >
          {children}
        </motion.main>
      </div>
    </div>
  )
}
