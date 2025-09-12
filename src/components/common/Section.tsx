import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLDivElement>

export default function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn('min-h-dvh', className)} {...props}>
      {children}
    </section>
  )
}
