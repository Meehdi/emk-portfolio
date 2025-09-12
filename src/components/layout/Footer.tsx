import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-section-5/30 flex items-center justify-center py-4 ">
      <p className="text-xs font-light">{t('copyright')}</p>
    </footer>
  )
}
