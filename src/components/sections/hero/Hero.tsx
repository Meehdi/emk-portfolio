import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SocialIcons } from './SocialIcons'

export default function Hero() {
  const t = useTranslations('homePage')

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        width={300}
        height={300}
        className="rounded-full"
      />
      <div className="text-center lg:text-left flex flex-col gap-10 items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1>{t('name')}</h1>
          <h2 className="text-gray-800">{t('title')}</h2>
        </div>

        <div className="flex gap-4 items-center justify-center lg:justify-start">
          <Button variant="outline">{t('downloadCV')}</Button>
          <Button variant="default">{t('contactInfo')}</Button>
        </div>

        <SocialIcons />
      </div>
    </div>
  )
}
