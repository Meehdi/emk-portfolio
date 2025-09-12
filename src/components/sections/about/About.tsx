import { useTranslations } from 'next-intl'
import SectionHeader from '@/components/common/SectionHeader'
import ValuesCard from '@/components/sections/about/ValuesCard'
import ExperienceCard from '@/components/sections/about/ExperienceCard'
import EducationCard from '@/components/sections/about/EducationCard'

export default function About() {
  const t = useTranslations('aboutPage')

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="grid grid-cols-3 gap-4">
        <ValuesCard />
        <ExperienceCard />
        <EducationCard />
      </div>
    </div>
  )
}
