import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Logo() {
  const t = useTranslations('navigation')
  return (
    <Image
      src="/images/logo-meehdi.png"
      alt={t('logo')}
      width={100}
      height={100}
    />
  )
}
