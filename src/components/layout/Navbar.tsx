import { Button } from '../common/Button'

type NavbarProps = {
  title: string
  subtitle?: string
  onMenuClick?: () => void
}

export const Navbar = ({ title, subtitle, onMenuClick }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-200 lg:hidden" onClick={onMenuClick}>
            ☰
          </button>
          <div>
            <p className="text-sm font-semibold text-white">{title}</p>
            {subtitle ? <p className="text-sm text-slate-400">{subtitle}</p> : null}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary">Share</Button>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-sm font-semibold text-white">
            A
          </div>
        </div>
      </div>
    </header>
  )
}
