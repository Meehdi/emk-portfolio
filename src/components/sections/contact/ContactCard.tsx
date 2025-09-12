import Image from 'next/image'
import { cn } from '@/lib/utils'

type ContactCardProps = {
  icon: string
  title: string
  subtitle: string
  index: number
  className?: string
}

export default function ContactCard({
  icon,
  title,
  subtitle,
  index,
  className,
}: ContactCardProps) {
  return (
    <div
      className={cn(
        'bg-white/30 backdrop-blur-sm p-8 rounded-lg shadow-lg border-l-4 border-green-600',
        'transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl animate-fade-in-up',
        `animate-delay-${index * 100 + 100}`,
        'flex flex-col items-center gap-2',
        className
      )}
    >
      <Image src={icon} alt={title} width={50} height={50} className="mb-1" />
      <h5>{title}</h5>

      <p className="">{subtitle}</p>
    </div>
  )
}
