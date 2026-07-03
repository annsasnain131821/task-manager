export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 text-lg font-semibold text-white shadow-lg shadow-cyan-500/20">
        S
      </div>
      <div>
        <p className="text-sm font-semibold text-white">SkyPilot</p>
        <p className="text-xs text-slate-400">Operations Suite</p>
      </div>
    </div>
  )
}
