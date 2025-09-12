'use client'

import { useEffect, useRef } from 'react'

interface ScrollAnimationProviderProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollAnimationProvider({
  children,
  className = '',
}: ScrollAnimationProviderProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    const element = ref.current
    if (element) {
      element.classList.add(
        'opacity-0',
        'translate-y-8',
        'transition-all',
        'duration-800'
      )
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
