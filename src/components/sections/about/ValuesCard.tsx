import { ZapIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ValuesCard() {
  const t = useTranslations('aboutPage')

  return (
    <div className="p-6 rounded-2xl border border-solid border-slate-500 flex flex-col items-center">
      <ZapIcon />
      <h5>{t('values.title')}</h5>
      <p>{t('values.content_1')}</p>
    </div>
  )
}
