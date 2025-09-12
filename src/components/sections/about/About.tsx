import React from 'react'
import { Card } from '@/components/ui/card'
import { Code, Award, TrendingUp, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'
import SectionTitle from '@/components/common/SectionTitle'
import { cn } from '@/lib/utils'

interface HighlightCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

const HighlightCard = ({
  icon: Icon,
  title,
  description,
  color,
}: HighlightCardProps) => {
  return (
    <Card
      className={cn(
        'border-none shadow-md hover:shadow-lg transition-all duration-300 group cursor-default bg-amber-200/30',
        ' subgrid-rows-3 items-center text-center px-4 py-8'
      )}
    >
      <div
        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h4>{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </Card>
  )
}

const AboutContent = () => {
  const t = useTranslations('about')

  return (
    <div className="space-y-4 text-gray-700 dark:text-gray-300">
      <p className="leading-relaxed">{t('paragraph1')}</p>
      <p className="leading-relaxed">{t('paragraph2')}</p>
    </div>
  )
}

const HighlightsGrid = () => {
  const t = useTranslations('about.highlights')

  const highlights = [
    {
      icon: Code,
      title: t('fullStack.title'),
      description: t('fullStack.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: t('awsCertified.title'),
      description: t('awsCertified.description'),
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: t('continuousLearning.title'),
      description: t('continuousLearning.description'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: t('teamCollaboration.title'),
      description: t('teamCollaboration.description'),
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-col gap-4">
      {highlights.map((item, index) => (
        <HighlightCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          color={item.color}
        />
      ))}
    </div>
  )
}

export default function About() {
  const t = useTranslations('about')

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-10">
      <SectionTitle title={t('title')} />
      <AboutContent />
      <HighlightsGrid />
    </div>
  )
}
