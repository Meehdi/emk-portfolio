import ScrollAnimationProvider from './ScrollAnimationProvider'

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
}

export default function Section({
  id,
  children,
  className = '',
}: SectionProps) {
  return (
    <ScrollAnimationProvider>
      <section
        id={id}
        className={`px-6 min-h-screen flex justify-center ${className}`}
      >
        <div className="max-w-6xl mx-auto w-full p-20">{children}</div>
      </section>
    </ScrollAnimationProvider>
  )
}
