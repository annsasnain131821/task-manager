import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
  return (
    <input
      className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500"
      {...props}
    />
  )
}
