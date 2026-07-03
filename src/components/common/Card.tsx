import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_-30px_rgba(2,8,23,0.7)] backdrop-blur-xl ${className}`.trim()}>
      {children}
    </div>
  )
}
