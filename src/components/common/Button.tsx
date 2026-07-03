import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

const variants = {
  primary: 'bg-slate-900 text-white hover:bg-slate-700 shadow-lg shadow-slate-950/20',
  secondary: 'border border-white/15 bg-white/10 text-slate-100 hover:bg-white/20',
  ghost: 'bg-transparent text-slate-300 hover:bg-white/10 hover:text-white',
} as const

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
