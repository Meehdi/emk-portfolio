import { GraduationCap } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function EducationCard() {
  const t = useTranslations('aboutPage')

  return (
    <div className="p-6 rounded-2xl bg-white border border-solid border-slate-500 flex flex-col items-center">
      <GraduationCap size={20} />
      <h5>{t('education.title')}</h5>
      <p>{t('education.content_1')}</p>
      <p>{t('education.content_2')}</p>
    </div>
  )
}
