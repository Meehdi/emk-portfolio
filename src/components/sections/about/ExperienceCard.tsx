import { Briefcase } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ExperienceCard() {
  const t = useTranslations('aboutPage')

  return (
    <div className="p-6 rounded-2xl border border-solid border-slate-500 flex flex-col items-center">
      <Briefcase size={20} />
      <h5>{t('experience.title')}</h5>
      <p>{t('experience.content_1')}</p>
      <p>{t('experience.content_2')}</p>
      <p>{t('experience.content_3')}</p>
    </div>
  )
}
